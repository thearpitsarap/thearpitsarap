import React from 'react'
import AppBar from './AppBar'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import HireMe from './HireMe'
import FooterSection from './FooterSection'

export const HomePage = () => {
  return (
    <div>
      <AppBar />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects/>
      <Achievements/>
      <HireMe/>
      <FooterSection/>
    </div>
  )
}