
import './App.css'
import About from './components/about/About'
import AnimatedCursor from './components/animatedCursor/AnimatedCursor'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import SkillGrid from './components/skills/SkillGrid'

function App() {

  return (
    <div className='relative'>
      <AnimatedCursor/>
      <Navbar/>
      <Hero/>
      <About/>
      <SkillGrid/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
