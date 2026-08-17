"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section>
            <div className='text-xl font-semibold'>
                Our Services  

                <span className="text-2xl text-orange-500 font-semibold pl-2">
                    <TypeAnimation
                        sequence={[
                            "Haircut",
                            2000,
                            "",
                            500,
                            "Beard Trim",
                            2000,
                            "",
                            500,
                            "Facial",
                            2000,
                            "",
                            500,
                             "Hair Color",
                            2000,
                            "",
                            500,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </span>

            </div>
        </section>
    );
}