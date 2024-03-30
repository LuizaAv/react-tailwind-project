import React from "react";

export default function Newsletter() {
  return (
    <div className= "flex justify-center items-center w-full py-16 h-[600px] text-white dark:text-black px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 py-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Lorem ipsum
          </h1>
          <p>Loreem ipsum</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="flex w-full rounded-md text-black outline-none border-2 border-[#00df9a] p-3"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] border-2 border-[#00df9a] ml-4 my-6 px-6 py-3">
              Notify me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
