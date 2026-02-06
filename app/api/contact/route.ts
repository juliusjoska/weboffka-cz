import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    // Send ntfy notification
    const ntfyUrl = process.env.NTFY_URL
    if (ntfyUrl) {
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
    }

    // Send email notification
    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USERNAME
    const smtpPass = process.env.SMTP_PASSWORD
    const contactEmail = process.env.CONTACT_EMAIL

    if (smtpHost && smtpUser && smtpPass && contactEmail) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 465,
          secure: true,
          auth: { user: smtpUser, pass: smtpPass },
        })

        await transporter.sendMail({
          from: `"Weboffka" <${smtpUser}>`,
          to: contactEmail,
          replyTo: data.email,
          subject: `Nová poptávka - ${data.name}`,
          text: body,
          html: `
            <h2>Nová poptávka z weboffka.cz</h2>
            <p><strong>Jméno:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.website ? `<p><strong>Web:</strong> ${data.website}</p>` : ''}
            ${data.budget ? `<p><strong>Rozpočet:</strong> ${data.budget}</p>` : ''}
            ${data.timeline ? `<p><strong>Termín:</strong> ${data.timeline}</p>` : ''}
            <hr>
            <p><strong>Zpráva:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          `.trim(),
        })
      } catch (emailError) {
        console.error('Email notification failed:', emailError)
      }
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
