'use server'

import mongoose from "mongoose"

export const dbConnecton = async () => {

    try {
        await mongoose.connect(process.env.BD_URL!)
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }

}