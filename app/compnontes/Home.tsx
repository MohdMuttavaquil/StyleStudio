import React from 'react'
import Hero from '../lib/utils/wright'
import Card from './Card'
import { beard, haircut, hairWash } from '../lib/utils/data'

const Homes = () => {
    return (
        <>

            <div className='flex flex-col gap-2 text-center my-10'>

                <h1 className='text-3xl font-bold'>The <span className='text-orange-500'>Style </span>Studio</h1>
                <p className='text-3xl font-semibold'>Your <span className='text-orange-500'>Style</span> Our <span className='text-orange-500'>Craft</span></p>
                <Hero />

                <button className="bg-orange-500 font-semibold text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition duration-300 w-fit mx-auto cursor-pointer">
                    Book Seat
                </button>

                <div className='font-semibold text-xl mt-[10vh]'>
                    <p >10+ Years of Expertise <span className='pl-6'>3+ Locations</span> </p>
                    <p>Trusted by 1,000+ Customers</p>
                </div>

            </div>

            <div className='mx-2 px-6 my-10 flex flex-col gap-2'>
                <p className='text-2xl font-semibold'>Why Style<span className="text-orange-500">Studio</span></p>

                <p>We combine expert barbering, modern styles, premium products, and personalized grooming to deliver a look that suits you. With years of experience and a commitment to quality, our skilled team ensures every haircut, beard trim, and grooming service leaves you feeling confident, refreshed, and ready to make an impression.</p>
            </div>


            <div className='flex flex-col md:flex-row gap-10 my-10'>
                <Card url={haircut.url} disc={haircut.disc} />
                <Card url={beard.url} disc={beard.disc} />
                <Card url={hairWash.url} disc={hairWash.disc} />
            </div>

            <div className='mx-2 px-6 my-10 flex flex-col gap-2'>
                <p className='text-2xl font-semibold'>About Style<span className="text-orange-500">Studio</span></p>

                <p>At our men’s hair salon, we combine years of professional experience with modern haircut trends and expert grooming techniques. Our skilled and friendly team is dedicated to giving every customer a personalized look. From stylish haircuts and beard grooming to relaxing facials and hair washes, we provide quality service in a comfortable, modern environment.</p>

                <p className='text-2xl font-semibold'>Address</p>
                <p>Style Studio <br/>123, Green Park Avenue,<br/>
                    Civil Lines, Roorkee, Uttarakhand – 247667 <br/>
                    Phone: +91 98765 43210</p>
            </div>

        </>
    )
}

export default Homes