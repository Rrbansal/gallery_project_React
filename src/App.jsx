import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import CustomRoutes from './Routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to="/">
      <h1>IMAGE GALLERY</h1>
      </Link>
      <CustomRoutes/>
    </>
  )
}

export default App
