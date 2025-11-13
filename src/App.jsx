
import './App.css'
import About from './components/about/About'
import AnimatedCursor from './components/animatedCursor/AnimatedCursor'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className='relative'>
      <AnimatedCursor/>
      <Navbar/>
      <Hero/>
      <About/>
      <div className='mt-[400px]'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
