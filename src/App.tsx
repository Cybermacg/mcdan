import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar'
import { HeroSection } from './sections/hero-section'
import './index.css'
import { AboutMe } from './sections/about-me'
import { RecentWork } from './sections/recent-work'
import { ContactMe } from './sections/contact-me'
import { Footer } from './components/footer'

function App() {


  const [count, setCount] = useState(0)

  return(
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <RecentWork/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
