import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: NextRequest) {
  try {
    const { fname, lname, email, phone, website, company, message, services } = await req.json()

    if (!fname || !lname || !email || !phone || !services) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    const brevoApiKey = process.env.BREVO_API_KEY

    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'Netflows', email: 'contact@netflows.xyz' },
        to: [{ email: 'contact@netflows.xyz', name: 'Netflows' }],
        subject: '15-Min Strategy Call Booked!',
        htmlContent: `
          <h2>New message from ${fname} ${lname}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Services:</strong> ${services}</p>
          <p><strong>Website:</strong> ${website ? website : "N/A"}</p>
          <p><strong>Company:</strong> ${company ? company : "N/A"}</p>
          <p><strong>Message:</strong> ${message ? message : "N/A"}</p>
        `,
      },
      {
        headers: {
          'api-key': brevoApiKey || '',
          'Content-Type': 'application/json',
        },
      }
    )

    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'Netflows', email: 'contact@netflows.xyz' },
        to: [{ email, fname }],
        subject: 'Booking Confirmation',
        htmlContent: `
          <h2>Hi ${fname},</h2>
          <p>Thank you for booking with us!</p>
          <p>We will get back to you shortly.</p>
          <p>— Netflows</p>
        `,
      },
      {
        headers: {
          'api-key': brevoApiKey || '',
          'Content-Type': 'application/json',
        },
      }
    )

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error: unknown) {
    console.error(error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}
