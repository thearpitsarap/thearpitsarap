import React from 'react'
import IntroLeft from './Components/IntroLeft'
import ImageIntro from './Components/ImageIntro'

const Intro = () => {
    return (
        <div className='relative flex justify-center'>
            <div style={{
                backgroundImage: "url('/assets/bg.png')",
                backgroundSize: "cover",
            }} className='absolute w-full h-screen opacity-20 -z-10'>
            </div>
            <div className='grid md:grid-cols-2 md:py-20 py-10'>
            <IntroLeft />
            <ImageIntro/>
            </div>
        </div>
    )
}

export default Intro