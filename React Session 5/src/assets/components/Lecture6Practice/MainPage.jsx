import React from 'react'
import { Routes , Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import './MainPage.css'
import Protect from './Protection/Protect'

const MainPage = () => {

    
  return (
    <>
    <div className='navbar'>
   <nav className='navlinks'>
        <button className='btn'><Link to = '/home'>Home</Link></button>
        <button className='btn'><Link to = '/login'>Login</Link></button>
        <button className='btn'><Link to ='/contact'>Contact</Link></button>
        <button className='btn'><Link to = '/about'>About</Link></button>
    </nav>    
    </div>
 

    <Routes>
        <Route path ='/login' element = {<Login/>}/>
        <Route path = '/home' element = {<Protect><Home/></Protect>} />
        <Route path = '/contact' element = {<Protect><Contact/></Protect>}/>
        <Route path='/about' element = {<Protect><About/></Protect>}/>
    </Routes>
    
    </>
  )
}

export default MainPage