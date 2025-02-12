import React from 'react'
import AppBar from './AppBar'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'

export const HomePage = () => {
  return (
    <div>
      <AppBar />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects/>
      <Achievements/>
    </div>
  )
}