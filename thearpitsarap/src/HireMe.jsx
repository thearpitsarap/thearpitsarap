import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HireMe = () => {
    return (
        <div className='bg-black mb-10 text-white flex md:flex-row flex-col p-10 justify-around gap-4 items-center'>
            <img src="/assets/lastlogo.png" alt="mandala" className='w-1/4' />
            <div className='font-bold text-xl md:text-3xl text-center md:w-1/4'>Wanna Hire me? Or just wanna discuss a cool project to collab on?</div>
            <div className='flex flex-col gap-4 items-center md:items-start'>
                <div className='font-semibold'>
                    Pune,Maharastra
                </div>
                <div>
                    <b>Email:</b> arpitsarap@gmail.com
                </div>
                <div className='flex gap-2 justify-center md:justify-start'>
                    <a className='p-1' href="www.linkedin.com/in/arpit-sarap"><FaLinkedin className='h-6 w-6 ' /></a>
                    <a className='p-1' href="https://github.com/thearpitsarap"><FaGithub className='h-6 w-6 ' /></a>
                    <a className='p-1' href="https://leetcode.com/u/thearpitsarap/"><SiLeetcode className='h-6 w-6 ' /></a>
                </div>
            </div>
        </div>
    )
}

export default HireMe