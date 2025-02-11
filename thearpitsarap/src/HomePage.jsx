import React from 'react'
import AppBar from './AppBar'
import Intro from './Intro'
import AboutMe from './AboutMe'

export const HomePage = () => {
  return (
    <div>
      <AppBar />
      <Intro />
      <AboutMe/>
    </div>
  )
}