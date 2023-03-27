import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/auth'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
        <Navbar/>
      <main>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
