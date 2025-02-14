import React from 'react'
import { FaLink } from "react-icons/fa";

const AchievementsCard = ({ title, desc, certiLink, link }) => {
    return (
        <div className='flex flex-col justify-center px-10'>
            <div className='px-4 py-2 border-2 flex gap-3 flex-col border-gray-100 drop-shadow-lg m-4 rounded-lg shadow-lg'>
                <div className='text-blue-900 font-semibold'>{title}</div>
                <div className='text-sm text-gray-600'>{desc}</div>
                <div className='flex gap-4 items-center'>
                    Certificate: <a href={certiLink} target="_blank"><FaLink /></a>
                </div>
            </div>
        </div>
    )
}

export default AchievementsCard