import { NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function GET(req: Request) {

    const authheader = req.headers.get('authorization')
    if (authheader !== `Bearer ${process.env.CORN_SECRET}`) {
        return new Response('Unauthorized')
    }

    try {
        await pool.execute(`
        UPDATE slots SET max_capacity = ? WHERE booked_count > ?`, [4, 2]
        )

        return NextResponse.json({ success: true, meaage: 'slots update' })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: 'Somthing want wrong' })
    }

}