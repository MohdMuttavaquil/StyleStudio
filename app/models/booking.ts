import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({

 time_slot: {
    type: String,
    required: true,
    unique: true 
 },

 booked_count: {
    type: Number,
    default: 0
 },

 max_capacity: {
    type: Number,
    default: 4
 }

})

const bookingModel = mongoose.models.slots || mongoose.model("slots", bookingSchema)
export default bookingModel