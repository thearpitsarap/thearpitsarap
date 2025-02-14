import React from 'react'
import { FaLink } from "react-icons/fa";

const ProjectCard = ({title,desc,imgn,gitlink,livelink}) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-3/4 text-center grid md:grid-cols-2 bg-white shadow-lg rounded-xl mt-10'>
                <div className='md:px-10 md:py-10 p-5'>
                    <img className='border-2 border-gray-100' src={"/assets/"+imgn} alt="bloggify" />
                </div>
                <div className='flex flex-col md:items-start justify-center m-5'>
                    <div className='font-bold text-xl'>{title}</div>
                    <div className='text-sm text-justify tracking-wide mt-2'>
                        {desc}
                    </div>
                    <div className='mt-2 flex gap-3'>
                        <div className='flex gap-3 items-center font-bold'>GitHub Link: <a href={gitlink} target='_blank'><FaLink /></a></div>
                        <div className='flex gap-3 items-center font-bold'>Live Link: <a href={livelink} target='_blank'><FaLink /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard