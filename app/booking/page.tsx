'use client'
import { isValidPhoneNumber } from 'libphonenumber-js'
import { FormEvent, useState } from "react"
import { showErrorToast, showSuccessToast } from '../lib/utils/toast'


const page = () => {

  const [sift, setSift] = useState<string>("")
  
  const handleSubmti = async (e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const name = formData.get("name")
    const phoneNo = formData.get("phoneNo") as string
    const time = formData.get("time")

    console.log(name, phoneNo, time)
    e.currentTarget.reset()
    if (!isValidPhoneNumber(phoneNo, "IN")) {
      showErrorToast("enter valid phone number")
      return
    }

    const response = await fetch("/api/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phoneNo,
      time,
    }),
  });

  const result = await response.json();
  showSuccessToast(result.message)
  
  }

  return (
    <div className="min-h-screen py-10 mx-2 text-white">

      <div className="font-semibold text-2xl text-center">Book Your Seat & Save Your Time</div>

      <div>

        <form onSubmit={handleSubmti} className="my-10 rounded-2xl flex flex-col gap-10">
          <input name="name"placeholder="Enter your name" required className="outline-none py-2 border-b-2 border-b-white md:w-[25%] w-full mx-auto" />

          <input type="number" name="phoneNo" placeholder="Enter your Phone No" required className="outline-none py-2 border-b-2 border-b-white md:w-[25%] w-full mx-auto" />

          <div className="mx-auto">
            <p>Select Sift</p>
            <select name="sift" required onChange={(e) => setSift(e.target.value)} >
              <option className="text-black">Select a option</option>
              <option className="text-black" value='morning'>Morning</option>
              <option className="text-black" value='evening'>Evening</option>
              <option className="text-black" value='night'>Night</option>
            </select>
          </div>


          {sift === 'morning' && <div className="flex flex-col gap-2 mx-auto">
            <label>
              <input type="radio" name="time" value="10 AM" /> 10 AM
            </label>
            <label>
              <input type="radio" name="time" value="10:30 AM" /> 10:30 AM
            </label>
            <label>
              <input type="radio" name="time" value="11 AM" /> 11 AM
            </label>
            <label>
              <input type="radio" name="time" value="11:30 AM" /> 11:30 AM
            </label>
            <label>
              <input type="radio" name="time" value="12 PM" /> 12 PM
            </label>
            <label>
              <input type="radio" name="time" value="12:30 PM" /> 12:30 PM
            </label>
          </div>}

          {sift === 'evening' && <div className="flex flex-col gap-2 mx-auto">

            <label>
              <input type="radio" name="time" value="3 PM" /> 3 PM
            </label>
            <label>
              <input type="radio" name="time" value="3:30 PM" /> 3:30 PM
            </label>
            <label>
              <input type="radio" name="time" value="4 PM" /> 4 PM
            </label>
            <label>
              <input type="radio" name="time" value="4:30 PM" /> 4:30 PM
            </label>
            <label>
              <input type="radio" name="time" value="5 PM" /> 5 PM
            </label>
            <label>
              <input type="radio" name="time" value="5:30 PM" /> 5:30 PM
            </label>
            <label>
              <input type="radio" name="time" value="6 PM" /> 6 PM
            </label>
            <label>
              <input type="radio" name="time" value="6:30 PM" /> 6:30 PM
            </label>
          </div>}

          {sift === 'night' && <div className="flex flex-col gap-2 mx-auto">
            <label>
              <input type="radio" name="time" value="8 PM" /> 8 PM
            </label>
            <label>
              <input type="radio" name="time" value="8:30 PM" /> 8:30 PM
            </label>
            <label>
              <input type="radio" name="time" value=" 9 PM" /> 9 PM
            </label>
            <label>
              <input type="radio" name="time" value="9:30 PM" /> 9:30 PM
            </label>
          </div>}

          <input type="submit" value="Book" className="bg-blue-500 text-gray-50 w-fit rounded-lg hover:bg-blue-600 px-3 py-1 mx-auto cursor-pointer" />

        </form>
      </div>


    </div>
  )
}

export default page