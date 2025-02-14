import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const AppBar = () => {
    return (
        <div className='bg-blue-50 flex justify-around drop-shadow-lg p-3'>
            <div className='flex items-center'>
                <span className='font-semibold text-blue-950 text-xl rounded-lg'>Arpit Sarap</span>
            </div>
            <div className='flex justify-between items-center'>
                <a className='p-1' href="https://www.linkedin.com/in/arpit-sarap" target="blank"><FaLinkedin className='h-6 w-6 text-blue-950' /></a>
                <a className='p-1' href="https://github.com/thearpitsarap" target="blank"><FaGithub className='h-6 w-6 text-blue-950'/></a>
                <a className='p-1' href="https://leetcode.com/u/thearpitsarap/" target="blank"><SiLeetcode className='h-6 w-6 text-blue-950'/></a>
            </div>
            <a href='https://drive.google.com/file/d/1bg-ZA3RwIFn83TZLc8CikASbbjrQmUX6/view?usp=sharing' target="blank" className='font-semibold text-white cursor-pointer rounded-lg px-4 py-2 bg-blue-950'>Resume</a>
        </div>
    )
}

export default AppBar