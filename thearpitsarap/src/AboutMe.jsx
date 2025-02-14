import React from 'react'
import ImageIntro from './Components/ImageIntro'
import AboutText from './Components/AboutText'

const AboutMe = () => {
  return (
    <div className='grid md:grid-cols-2'>
      <ImageIntro name={"pose.JPG"} />
      <AboutText />
    </div>
  )
}

export default AboutMe