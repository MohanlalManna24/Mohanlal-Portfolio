import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <BackToTop />
    </>
  )
}

export default App
