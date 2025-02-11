import React from 'react'

const ImageIntro = ({name}) => {
    return (
        <div className='flex justify-center self-center'>
            <div className='bg-blue-100 border-8 border-white drop-shadow-2xl w-1/2'>
                <img className='object-cover border-8 border-white drop-shadow-2xl rotate-6' src={"/assets/"+name} alt="asd" />
            </div>
        </div>
    )
}

export default ImageIntro