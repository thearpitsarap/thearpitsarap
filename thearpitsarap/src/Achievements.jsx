import React from 'react'
import AchievementsCard from './Components/AchievementsCard';

const Achievements = () => {
    return (
        <div className='my-20'>
            <div className='font-bold text-2xl md:text-5xl text-center text-yellow-700 mb-14'>Achievements & Certifications:</div>
            <AchievementsCard title={"🏆  Secretary & GP2 Head at Social Welfare and Development Committee, VIT Pune"}
                desc={`Secured a trophy for 2 years of service in Social Welfare and Development community as Social Activity Secretary, 2022.
                    Worked with a team of 35 members to successfully manage activities under General Proficiency - 2, a social activity initiative.`}
                certiLink={""}
            />
            <AchievementsCard title={`🏆 Coordinator at Social Welfare and Development Committee, VIT Pune`}
                desc={`Worked with a team of 15 members to successfully organize social activities - Umang, Ashadeep and Aathmabodh.`}
                certiLink={""}
            />

            <AchievementsCard title={`🏆 Won awards in the Cyber Olympiad and Maths Olympiad in the inter district level.`}
                certiLink={""}
            />
        </div>
    )
}

export default Achievements