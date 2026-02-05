import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would normally send an email using Resend or similar
    // For now, we'll just log it and return success
    console.log('New contact form submission:', {
      name: data.name,
      email: data.email,
      website: data.website,
      message: data.message,
      budget: data.budget,
      timeline: data.timeline,
      timestamp: new Date().toISOString(),
    })

    // TODO: Add Resend integration
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({...})

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
