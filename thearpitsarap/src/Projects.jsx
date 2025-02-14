import React from 'react'
import ProjectCard from './Components/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col my-10 md:px-10 justify-center gap-4 bg-blue-50 py-10'>
            <div className='text-center text-blue-700 font-bold text-2xl md:text-5xl'>Projects:</div>

            <ProjectCard title={"OrderEase"} desc={`OrderEase is a modern canteen order management system designed 
                to simplify and enhance the food ordering process while streamlining operations for all 
                stakeholders involved. The system ensures real-time order 
                tracking, allowing customers to monitor the status of their orders from submission to delivery. 
                For staff and admins, it offers seamless order management features, including tracking order 
                history, updating status, and managing inventory. By integrating secure payment gateways like 
                Razorpay, it ensures smooth transaction processing. Designed to improve efficiency and reduce 
                errors, OrderEase enhances the overall experience for customers, staff, and admins alike, making 
                food ordering more convenient and organized.`} imgn={"orderease.jpeg"} gitlink={"https://github.com/HarshBatra/OrderEase"} livelink={"https://github.com/HarshBatra/OrderEase"} />

            <ProjectCard title={"SplitWise"} desc={`Splitwise is a comprehensive expense management 
                    console application designed to simplify tracking and sharing costs among friends, roommates, or any 
                    group. Users can create or join groups, add friends, 
                    and split expenses evenly or in customized shares, with automatic calculations of total balances. 
                    The app provides suggested payments to help users settle up efficiently, reducing the complexities 
                    of managing group finances. Detailed charts and graphs are generated to give users a visual 
                    representation of total expenses, helping them analyze spending patterns. With a user-friendly 
                    console interface, Splitwise ensures seamless management of shared expenses, making it the perfect
                    tool for any group looking to organize and track their finances without confusion or hassle.`} imgn={"split.png"} gitlink={"https://github.com/thearpitsarap/splitwise"} livelink={"https://github.com/thearpitsarap/splitwise"} />
        </div>
    )
}

export default Projects