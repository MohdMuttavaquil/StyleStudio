"use clinet"

type cardProps = {
    url: string,
    disc: string
}

const Card = ({url, disc}: cardProps ) => {
  return (
    <div className="mx-2 md:mx-auto rounded-2xl bg-[#1C2026] border-2 border-black h-[35vh] flex flex-col gap-4">
         <img src={url} className="w-full h-[60%] rounded-2xl"/>
         <p className="px-2">{disc}</p>
    </div>
  )
}

export default Card