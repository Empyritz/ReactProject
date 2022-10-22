import { faCss3, faGitAlt, faHtml5, faReact, faSquareJs, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/Animated'
import './about.scss'
import { Stack } from '@mui/material'

const About = ()=> {
  const [letterClass, setLetterClass] = useState('text-animate')

  const strAbout = 'About me'
  const arrAbout = [...strAbout]

  useEffect(() => {
    setTimeout (() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);
  
  return (
    <>
      <Stack className='container about-page' justifyContent='center' direction={{ xs: 'row', lg: 'column' }} >
      <Stack className='text-zone about-info' sx={{ marginLeft: '3%' }} >
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={arrAbout} idx={15}/>
        </h1>
        <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
        </p>
        <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. 
        </p>
  
        <p>
            If I need to define myself in one sentence that would be a curious person, 
            every day looking to learn something new, live new experiencies,
            passionate to the arts and science
        </p>
      </Stack>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faSquareJs} color="#efd81d" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faGithub} color="black" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="green" />
          </div>
        </div>
      </div>
      </Stack>
      <Loader type='pacman'/>
    </>

    
  )
}

export default About 