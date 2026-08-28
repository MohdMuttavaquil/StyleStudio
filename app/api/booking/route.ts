'use server'
import { dbConnecton } from "@/app/lib/db"
import bookingModel from "@/app/models/booking"
import { NextResponse } from "next/server"

// Connect to Database
dbConnecton()

export async function POST(req: Request) {
  
  const body = await req.json()
  const { name, phoneNo, time } = body

  // Check time validation 
  const now = new Date()
  const currentTime = now.toLocaleTimeString('en-IN', {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  })
  if (currentTime >= time || time === null) {
    return NextResponse.json({ success: false, message: "Enter valid time" })
  }

  // Check slot avaliabilaty
  try {
    const slot = await bookingModel.findOne({ time_slot: time })

    if (slot.booked_count >= slot.max_capacity) {
      return NextResponse.json({ success: false, message: "Seat not avaliable chose another time" })
    }
    slot.booked_count += 1
    await slot.save()

  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, message: "Somthing wants wrong" })
  }


  // Send Email to owner
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
        subject: "New Selon Booking",
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
      return NextResponse.json({ success: false, message: "Failed to send email" })
    }

    return NextResponse.json({ success: true, message: "Booking submitted successfully" })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, message: "Somthing wants wrong" })
  }

}