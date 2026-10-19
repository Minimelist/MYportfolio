import { useState } from 'react'
import Container from './components/Container.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Container />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
