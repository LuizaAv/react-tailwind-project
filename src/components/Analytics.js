import React from "react"
import Laptop from "../assets/background.png"

export default function Analytics(){
    return(
        <div className="w-full bg-white py-16 px-4 dark:bg-black">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className = "w-[500px] mx-auto my-4 dark:bg-white dark:p-5 dark: rounded" src={Laptop} alt="laptop"></img>
                <div className="flex flex-col justify-center dark:text-white">
                    <p className="font-bold p-5 pl-0 text-[#00df9a] uppercase">Programming with React.js, Tailwind</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Make your webpage development more effective</h1>
                    <p className="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                    <button className="bg-[#00df9a] w-[200px] rounded mt-5 p-3" >Get Started</button>
                </div>
            </div>
        </div>
    )
}