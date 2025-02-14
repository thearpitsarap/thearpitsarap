import React from 'react'

const AboutText = () => {
    return (
        <div className='flex flex-col gap-10 my-10 mx-7 md:mx-28'>
            <p className='font-bold text-red-700 md:text-left text-2xl text-center md:text-5xl'>
                About Me:
            </p>
            <div className='flex flex-col gap-4'>
                <div className='text-blue-950 text-justify leading-5 tracking-wide'>
                    Having recently completed my Post Graduate Diploma in Advanced Computing at CDAC-Acts, Pune, I am
                    well-versed in programming languages such as Java, C++, JavaScript, SQL, HTML5, CSS, Shell Script, and C#.
                    My experience extends to frameworks like Spring Boot, NodeJS, and React.js, and I’m proficient with tools
                    like Docker and Git. I have hands-on expertise in database management with MySQL and MongoDB.
                    As a Software Developer at Codewits Solutions, I improved API testing, implemented Nginx support,
                    and utilized AWS Lambda for enhanced data management.
                </div>
                <div className='text-blue-950 text-justify leading-5 tracking-wide'>
                    Notable projects I’ve worked on include OrderEase, a canteen order management system, and Splitwise,
                    an application for managing shared expenses. I have also held leadership positions in the
                    Social Welfare and Development Committee at VIT Pune, overseeing various social activities.
                    Awarded in the Cyber and Maths Olympiad at the inter-district level, I actively volunteer for digital
                    literacy initiatives. Passionate about continuous learning, I am driven to excel as a
                    Software Engineer.
                </div>
            </div>

        </div>
    )
}

export default AboutText