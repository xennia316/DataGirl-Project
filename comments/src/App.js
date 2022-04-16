import React from 'react'
import LoggedIn from './pages/LoggedIn'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Settings from './pages/Settings'

// Importing Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/comments' element={<LoggedIn />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
  )
}

export default App