import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './scss/App.scss'
import './App.css'
// only import the components you're using
import Nav from './components/Nav'
import NavCanvas from './components/NavCanvas'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavCanvas />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
