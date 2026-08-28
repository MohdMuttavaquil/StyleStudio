'use server'

import mongoose from "mongoose"

export const dbConnecton = async () => {
    try {
        if (!process.env.BD_URL) {
            throw new Error("BD_URL environment variable is not defined");
        }

        await mongoose.connect(process.env.BD_URL)
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }

}