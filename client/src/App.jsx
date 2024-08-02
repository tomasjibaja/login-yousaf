import Signup from './assets/Signup.jsx'
import Login from './assets/Login.jsx'
import Home from './assets/Home.jsx'
import UserList from './assets/UserList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/users' element={<UserList />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
