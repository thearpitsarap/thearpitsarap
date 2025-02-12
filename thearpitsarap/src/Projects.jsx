import React from 'react'
import ProjectCard from './Components/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col my-10 md:px-10 justify-center gap-4 bg-blue-50 py-10'>
            <div className='text-center text-blue-700 font-bold text-2xl md:text-5xl'>Projects:</div>

            <ProjectCard title={"Bloggify"} desc={`Bloggify is a full-stack blog application built with the MERN stack
                                    (MongoDB, Express.js, React.js, and Node.js). It provides users with the ability to
                                    register, login, create, edit, and delete blog posts, as well as comment on posts.
                                    The application uses JWT for user authentication, bcrypt for password hashing, multer
                                    for handling images.`} imgn={"bloggify.png"}/>

            
        </div>
    )
}

export default Projects