'use server'

import mongoose from "mongoose"

export const dbConnecton = async () => {
 const url: string = process.env.DB_URL!

    try {
        await mongoose.connect(url)
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }

}