import React from 'react'
import AppBar from './AppBar'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Skills from './Skills'

export const HomePage = () => {
  return (
    <div>
      <AppBar />
      <Intro />
      <AboutMe/>
      <Skills/>
    </div>
  )
}