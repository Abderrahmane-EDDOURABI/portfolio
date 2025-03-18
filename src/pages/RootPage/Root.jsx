import React, { useEffect } from 'react'
import About from '../../components/About/About.Jsx'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Home from '../../components/Home/Home'

const Root = () => {
  return (
    <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default Root