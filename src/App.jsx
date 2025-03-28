import React from 'react'
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserList from './pages/UserList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<UserList/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App