import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const name = body.jmeno || body.name
    const email = body.email
    const phone = body.telefon || body.phone
    const service = body.typWebu || body.service
    const budget = body.rozpocet || body.budget
    const message = body.zprava || body.message

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Vyplňte povinná pole' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.migadu.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlBody = `
      <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#c8ff00;background:#0a0a0a;padding:20px;border-radius:12px;text-align:center">
          Nová poptávka z weboffka.cz
        </h2>
        <table style="width:100%;border-collapse:collapse;margin:20px 0">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Jméno</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">E-mail</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr>
          ${phone ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Telefon</td><td style="padding:8px;border-bottom:1px solid #eee">${phone}</td></tr>` : ''}
          ${service ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Typ webu</td><td style="padding:8px;border-bottom:1px solid #eee">${service}</td></tr>` : ''}
          ${budget ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Rozpočet</td><td style="padding:8px;border-bottom:1px solid #eee">${budget}</td></tr>` : ''}
        </table>
        <div style="background:#f9f9f9;padding:16px;border-radius:8px;margin:20px 0">
          <h3 style="margin:0 0 8px">Zpráva</h3>
          <p style="white-space:pre-wrap;margin:0">${message}</p>
        </div>
        <p style="color:#888;font-size:12px;text-align:center">Odesíláno z kontaktního formuláře na weboffka.cz</p>
      </div>
    `

    await transporter.sendMail({
      from: `"Weboffka.cz" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `[weboffka.cz] Poptávka od ${name}`,
      html: htmlBody,
    })

    // ntfy notification
    if (process.env.NTFY_URL) {
      try {
        await fetch(process.env.NTFY_URL, {
          method: 'POST',
          headers: { Title: 'Weboffka.cz - Nova poptavka', Priority: '4', Tags: 'globe,money_with_wings' },
          body: `${name} (${email})${service ? ` - ${service}` : ''}${budget ? ` | ${budget}` : ''}\n${message.substring(0, 200)}`,
        })
      } catch {}
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Nepodařilo se odeslat zprávu' }, { status: 500 })
  }
}
