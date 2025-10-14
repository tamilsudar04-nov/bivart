

import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Components/Home'
import Women from './Components/Women'
import Men from './Components/Men'
import Kids from './Components/Kids'
import Wishlist from './Components/Wishlist'
import AddCart from './Components/AddCart'
import Contact from './Components/Contact'

import Login from './Components/Login'
import Navbar from './Components/Navbar'






function App() {
  return (
    <>
    {/* <SareesSection/> */}
 <Navbar/>
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='Women' element={<Women/>}/>
<Route path='Men' element={<Men/>}/>
<Route path='Kids'element={<Kids/>}/>
<Route path='Wishlist' element={<Wishlist/>}/>
<Route path='AddCart' element={<AddCart/>}/>
<Route path='Contact' element={<Contact/>}/>
<Route path='Login' element={<Login/>}/> 
  </Routes> 
    
    </>
  )
}

export default App
