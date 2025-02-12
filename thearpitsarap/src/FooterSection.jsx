import React from 'react'
import { FaLink } from "react-icons/fa";

const FooterSection = () => {
    const date = new Date();
  return (
    <div className='flex justify-around flex-col md:flex-row px-5 py-5 font-bold'>
        <div>@{date.getFullYear()} Arpit Sarap | All Rights Reserved</div>
        <div className='flex items-center gap-3'>This Portfolio's GitHub Link: <a href="https://github.com/thearpitsarap/thearpitsarap" target="_blank"><FaLink /></a> </div>
    </div>
  )
}

export default FooterSection