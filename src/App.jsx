import React from 'react'
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserList from './pages/UserList'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import UserDetails from './pages/UserDetails'
const App = () => {
  const token=useSelector((state)=>state.auth.token)
  return (
    <div>
      <BrowserRouter>
      {token && <Navbar/>}
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<UserList/>}></Route>
        <Route path='/user/:id' element={<UserDetails/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App