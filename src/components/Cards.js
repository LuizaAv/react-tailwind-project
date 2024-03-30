import React from "react"
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

export default function Cards(){

    return(
        <div className="w-full py-[10rem] px-4 dark:bg-gray-200 bg-white dark:text-white">
            <div className="max-w-[1240px] w-full grid md:grid-cols-3 gap-8 mx-auto">
                <div className="w-full shadow-xl dark:bg-gray-300 dark:shadow-white rounded-md flex flex-col items-center p-6 my-4 hover:scale-105 duration-200">
                    <img className="w-20 mx-auto " src={single} alt="singlePic"></img>
                    <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB storage</p>
                        <p className="py-2 border-b mx-8">1 Granted user</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded mt-10 p-3" >Free Trial</button>
                </div>
                <div className="w-full shadow-xl dark:bg-gray-300 dark:shadow-white md:my-0 rounded-md flex flex-col items-center p-6 my-4 hover:scale-105 duration-200">
                    <img className="w-20 mx-auto " src={double} alt="singlePic"></img>
                    <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB storage</p>
                        <p className="py-2 border-b mx-8">1 Granted user</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded mt-10 p-3" >Free Trial</button>
                </div>
                <div className="w-full shadow-xl dark:bg-gray-300 dark:shadow-white rounded-md flex flex-col items-center p-6 my-4 hover:scale-105 duration-200">
                    <img className="w-20 mx-auto " src={triple} alt="singlePic"></img>
                    <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB storage</p>
                        <p className="py-2 border-b mx-8">1 Granted user</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded mt-10 p-3" >Free Trial</button>
                </div>
            </div>
        </div>
    )
}