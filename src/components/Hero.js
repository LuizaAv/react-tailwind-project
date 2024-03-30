import React from "react"
import {ReactTyped} from "react-typed"

export default function Hero() {

    return(
        <div className="text-white dark:text-black">
            <div className="max-w-[800px] mt-[-20px] h-screen mx-auto text-center flex flex-col justify-center items-center">
                <p className="text-[#00df9a] font-bold p-2">Grow with programming</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">Grow with knowledge</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-4xl sm:text-3xl text-xl">Fast, flexible services for</p>
                </div>
                <ReactTyped
                            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]'
                            strings={['BTB', 'BTC']}
                            typeSpeed={200}
                            backSpeed={230}
                            loop
                        />
                <p className="md:text-2xl text-xl font-bold text-[#00df9a]">Loreem ipsum, loree, ipsum</p>
                <button className="bg-[#00df9a] w-[200px] rounded mt-10 p-3" >Get Started</button>
            </div>
        </div>
    )
}