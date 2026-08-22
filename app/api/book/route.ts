'use server'
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    const { name, phoneNo, time } = body

    try {
         const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.API_KEY!,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: process.env.SENDER_NAME,
          email: process.env.SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.RECEIVER_EMAIL,
          },
        ],
        subject: "New Booking",
        htmlContent: `
          <h2>New Booking</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phoneNo}</p>
          <p><strong>Time:</strong> ${time}</p>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()

      console.error("Brevo error:", error)

      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: "Booking submitted successfully",
    })

    } catch (error) {
        console.error(error)

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
    }

}