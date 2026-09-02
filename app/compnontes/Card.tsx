"use clinet"

import Link from "next/link"

type cardProps = {
    url: string,
    disc: string
}

const Card = ({url, disc}: cardProps ) => {
  return (
    <div className="mx-2 md:mx-auto rounded-2xl bg-[#1C2026] border-2 border-black h-[50vh] flex flex-col gap-4">
         <img src={url} className="w-full h-[50%] rounded-2xl"/>
         <p className="px-2">{disc}</p>

           <Link href="/booking" className="bg-orange-500 font-semibold text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition duration-300 cursor-pointer w-fit my-4 ml-2">
        Book Now
        </Link>
    </div>
  )
}

export default Card