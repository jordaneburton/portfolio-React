import { Outlet } from 'react-router-dom';
import { PageProvider } from './utils/PageContext';
import './scss/App.scss'
import './App.css'
// only import the components you're using
import NavCanvas from './components/NavCanvas'
import Shapes from './components/Shapes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <PageProvider>
        <NavCanvas />
        <Outlet />
      </PageProvider>

      <Shapes />
      <Footer />
    </>
  )
}

export default App
