import React from 'react'

const IntroLeft = () => {
    return (
        <div className="flex justify-center items-center">
            <div>
                <p className="text-blue-950 font-extrabold text-2xl text-center md:text-left md:text-5xl">Hello!</p>
                <p className="text-blue-900 text-xl md:text-3xl font-bold text-center md:text-left">
                    I'm Arpit Sarap!
                </p>
                <div className='my-10'>
                    <div className='px-4 py-2 bg-white drop-shadow-lg text-blue-950 rounded-xl m-4 text-center font-semibold'> Software Devloper </div>
                    <div className='px-4 py-2 bg-white drop-shadow-lg text-blue-950 rounded-xl m-4 text-center font-semibold'> Programming Enthusiast </div>
                    <div className='px-4 py-2 bg-white drop-shadow-lg text-blue-950 rounded-xl m-4 text-center font-semibold'> MERN Stack Web Devloper </div>
                    <div className='px-4 py-2 bg-white drop-shadow-lg text-blue-950 rounded-xl m-4 text-center font-semibold'> Backend Devloper </div>
                </div>
            </div>
        </div>
    )
}

export default IntroLeft