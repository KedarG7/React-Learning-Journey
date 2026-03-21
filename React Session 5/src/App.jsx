import './App.css'
import Counter from './assets/components/Lecture1/counter'
import Card from './assets/components//Lecture1/card'
import Lecture2 from './assets/components/Lecture2/Lecture2'
import Lecture4 from './assets/components/Lecture4/Lecture4'
import ContextAPIcomponent from './assets/components/Lecture4/contextAPI/contextAPIcomponent'
import Component1 from './assets/components/Lecture4Practice/Component1'
import Component2 from './assets/components/Lecture4Practice/Component2'
import Menucard from './assets/components/Lecture4Practice2/menucard'
import Lecture5 from './assets/components/Lecture5/Lecture5'
import ApiComponent from './assets/components/Lecture5/apiComponent'
import MemoMemo from './assets/components/Lecture5Practice/Lecture5Practice'

import Lecture6Sample from './assets/components/Lecture6/Lecture6Sample'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './assets/components/Lecture6/pages/Home'
import About from './assets/components/Lecture6/pages/About'
import Contact from './assets/components/Lecture6/pages/Contact'
import DashBoard from './assets/components/Lecture6/pages/DashBoard'
import Login from './assets/components/Lecture6/pages/login'
import ProtectDashboard from './assets/components/Lecture6/pages/ProtectDashBoard'
import MainPage from './assets/components/Lecture6Practice/MainPage'
import Navigation from './assets/components/Lecture6Practice2/Navigation'
import Registration from './assets/components/Lecture8Practice2/Registration'
import Form from './assets/components/Lecture8Practice/Form'

function App() {


  return (
    <>
      {/* <Counter/>
      <div className="page1">
      </div> */}
      {/* <Card/>
      <Lecture2/> */}
      {/* <Lecture4/> */}
      {/* <ContextAPIcomponent/> */}
      {/* <Component2/> */}
      {/* <Menucard/> */}
      {/* <Lecture5/> */}
      {/* <ApiComponent/> */}
      {/* <MemoMemo/> */}
      {/* <Lecture6/> */}
      {/* <Lecture6Sample/> */}


      {/* <div className='App'>

        <nav>
          <Link to ="/">Home</Link>
          <Link to = '/about'>About</Link>
          <Link to ="/contact">Contact</Link>
        </nav>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path = '/dashboard' element={
          <ProtectDashboard>
            <DashBoard/>
          </ProtectDashboard>
        }/>
        <Route path = '/login' element = {<Login/>}/>
      </Routes>

      </div> */}

      
     {/* <MainPage/> */}
     {/* <Navigation/> */}
     {/* <Registration/> */}
     {/* <Form/> */}
     <Registration/>

    
    </>
  )
}

export default App
