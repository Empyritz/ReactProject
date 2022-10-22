import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/Animated'
import './contact.scss'
import 'animate.css'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Stack, Grid } from '@mui/material'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const strContact = 'Contact me'
  const arrContact = [...strContact] 
  const refForm = useRef()

  useEffect(() => {
    setTimeout (() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
          'service_k0dp23r',
          'template_j1oytji',
          refForm.current,
          'jb-eyXnVKVhPnSrn5'
        )
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          (err) => {
            console.log(err)
          }
        )
  }

  return(
    <>
      <Grid container className='container contact-page' alignItems={{md: 'center'}}>
        <Grid item className='text-zone' xs={10} lg={6} margin={{ xs: '88px auto' }} > 
          <h1>
            <AnimatedLetters strArray={arrContact} letterClass={letterClass} idx={15}/>
          </h1>
          <p>
            Ea est occaecat quis pariatur sint cupidatat sunt anim sunt sit. Ea consectetur aute laboris exercitation aliqua exercitation aute eiusmod in proident officia. Eu dolor nulla id irure irure aliqua eiusmod excepteur adipisicing dolore reprehenderit laboris tempor velit. Eiusmod duis irure dolor laborum non minim ullamco. Veniam anim esse eu enim.
          </p>
          <div className='contact-form'> 
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name='name' placeholder='Name' required/>
                </li>
                <li className='half'>
                  <input type="email" name='email' placeholder='Email' required/>
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type="submit" className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </Grid>
        <Grid item direction='column' xs={12} md={6} alignItems='center'>
          <div >
          <div className='info-map'>
            Fabian,
            <br/>
            Nava Pereda,
            <br/>
            Ojo de agua
            <br/>
            <span>fabian.nava.pereda@gmail.com</span>
          </div>
          <div className='map-wrap'>
            <MapContainer center={[19.643999, -98.978551]} zoom={23}>
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={[19.643999, -98.978551]}> 
                <Popup>Fabian lives here, come here in a sunny day or not, just bring ice cream and lets talk</Popup>
              </Marker>
            </MapContainer >
          </div>
          </div>
        </Grid>
      </Grid>
      <Loader type='pacman'/>
    </>
  )
}

export default Contact