import { Route, Routes } from 'react-router'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { CheckSession } from './services/auth'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import AnimeDetails from './pages/AnimeDetails'
import SearchDetails from './pages/SearchDetails'
import PersonalPage from './pages/PersonalPage'
import UserDetails from './pages/UserDetails'
import Recommendations from './pages/Recommendations'
import Register from './pages/Register'

import CreateRecommendation from './pages/CreateRecommendation'
import CreateReview from './pages/CreateReview'
import EditRecommendation from './pages/EditRecommendation'
import EditReview from './pages/EditReview'
import Login from './pages/Login'


export const CurrentMalId = createContext(0)
function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
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
      <Sidebar setUser={setUser} user={user} handleLogOut={handleLogOut}/>
      <CurrentMalId.Provider value={CurrentMalId}>
        <Routes>
          <Route path="/" element={<Home user={user}/>}/>
          <Route path="/details/:animeName/:animeId" element={<AnimeDetails user={user} setUser={setUser}/>}/>
          <Route path="/search/:search" element={<SearchDetails/>} />
          <Route path="/profile/:id" element={<PersonalPage user={user}/>}/>
          <Route path="/user/:id" element={<UserDetails/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/recommendations' element={<Recommendations/>}/>
        </Routes>
      </CurrentMalId.Provider>
      </main>
    </div>
  )
}

export default App
