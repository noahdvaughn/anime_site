import { Route, Routes } from 'react-router'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { CheckSession } from './services/auth'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import AnimeDetails from './pages/AnimeDetails'

export const CurrentMalId = createContext(0)
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

  // ref={currentMalId}
  // const whater = (props, ref)

  return (
    <div className="App">
        <Navbar/>
      <main>
      <Sidebar />
      <CurrentMalId.Provider value={CurrentMalId}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/details/:animeName/:animeId" element={<AnimeDetails />}/>
        </Routes>
      </CurrentMalId.Provider>
      </main>
    </div>
  )
}

export default App
