import { NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function GET(req: Request) {
    const authheader = req.headers.get('authorization')
    if (authheader !== `Bearer ${process.env.CORN_SECRET}`) {
        return new Response('Unauthorized')
    }

    let connection
    try {
        connection = await pool.getConnection()
        await connection.beginTransaction()
        await connection.query('UPDATE slots SET booked_count = 0')
        await connection.commit()
        return NextResponse.json({success: true, message: 'Daily slots reset'})
    } catch (error) {
        console.log(error)
    } finally {
        if (connection) {
            connection.release()
        }
    }
}

