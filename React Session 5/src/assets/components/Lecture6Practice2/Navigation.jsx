import React from 'react'
import { Routes } from 'react-router-dom'
import Home from './Routes/Home'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Contact from './Routes/Contact'
import DashBoard from './Routes/DashBoard'
import Login from './Routes/Login'

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <div className="box">
        <h1>Welcome to the Dashboard</h1>
        <div className="header">
          <Link to = '/dashboard'>
            <button>
              <h1>DashBoard</h1>
            </button>
          </Link>
          <br />
          <Link></Link><h1>Login</h1>
          <br />
          <h1>Contact</h1>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Navigation