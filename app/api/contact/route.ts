import { NextResponse } from 'next/server'

const RATE_LIMIT_WINDOW = 60 * 1000
const MAX_REQUESTS = 5
const requestLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const requests = requestLog.get(ip) || []
  const recent = requests.filter(t => now - t < RATE_LIMIT_WINDOW)
  requestLog.set(ip, recent)

  if (recent.length >= MAX_REQUESTS) return true
  recent.push(now)
  requestLog.set(ip, recent)
  return false
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Příliš mnoho požadavků. Zkuste to za chvíli.' },
        { status: 429 }
      )
    }

    const data = await request.json()

    // Honeypot check
    if (data.website_url) {
      return NextResponse.json({ success: true })
    }

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Vyplňte povinná pole' },
        { status: 400 }
      )
    }

    if (!data.gdprConsent) {
      return NextResponse.json(
        { error: 'Musíte souhlasit se zpracováním osobních údajů' },
        { status: 400 }
      )
    }

    // Send ntfy notification
    const ntfyUrl = process.env.NTFY_URL || 'https://ntfy.sh/weboffka-kontakt'

    const body = [
      `Jméno: ${data.name}`,
      `Email: ${data.email}`,
      data.website ? `Web: ${data.website}` : null,
      data.budget ? `Rozpočet: ${data.budget}` : null,
      data.timeline ? `Termín: ${data.timeline}` : null,
      ``,
      `Zpráva:`,
      data.message,
    ].filter(Boolean).join('\n')

    try {
      await fetch(ntfyUrl, {
        method: 'POST',
        headers: {
          'Title': `Nova poptavka - ${data.name}`,
          'Tags': 'incoming_envelope',
          'Priority': '4',
        },
        body,
      })
    } catch (ntfyError) {
      console.error('Ntfy notification failed:', ntfyError)
    }

    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Něco se pokazilo' },
      { status: 500 }
    )
  }
}
