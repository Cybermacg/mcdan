import './App.css'
import { Navbar } from './components/navbar'
import { HeroSection } from './sections/hero-section'
import './index.css'
import { AboutMe } from './sections/about-me'
import { RecentWork } from './sections/recent-work'
import { ContactMe } from './sections/contact-me'
import { Footer } from './components/footer'
import { StrandsAnimate } from './sections/design'

function App() {

  return(
    <div>
      <Navbar/>
      <HeroSection/>
      <StrandsAnimate/>
      <AboutMe/>
      <RecentWork/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
