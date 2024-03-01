import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import githubLogo from './assets/github.svg'
import './scss/App.scss'
import './App.css'
// only import the components you're using
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card bg={'light'} text={'dark'}>
        <Card.Body>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Card.Text>
            Edit <code>src/App.jsx</code> and save to test HMR
          </Card.Text>
        </Card.Body>
      </Card>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
