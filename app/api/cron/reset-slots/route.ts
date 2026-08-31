import { dbConnecton } from "@/app/lib/db";
import bookingModel from "@/app/models/booking";
import { NextResponse } from "next/server";

// Database Connection 
dbConnecton()

export async function GET(req: Request) {
    const authHeader = req.headers.get("authorization");

    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ success: false, message: "Unauthorized" })
    }

    try {
        await bookingModel.updateMany({ booked_count: { $gt: 0 } }, { $set: { booked_count: 0 } })
        return NextResponse.json({ success: true, message: "slots reset successfully" })
    } catch (error) {
        return NextResponse.json({ success: false, message: "somthing want wrong" })
    }

}

