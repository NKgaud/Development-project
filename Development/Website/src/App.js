 import React from 'react'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
 import { ToastContainer,toast } from 'react-toastify'
//  import 'react-toastify/dist/components'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile'
import Blog from './pages/Blog'
import Single_blog from './pages/Single_blog'

 
 function App() {
   return (
     <div>
      <ToastContainer/>
     <BrowserRouter>
     <Routes>
      <Route path='/' index element={<><Header/><Home/><Footer/></>}></Route>
      <Route path='/about'  element={<><Header/><About/><Footer/></>}></Route>
      <Route path='/signup'  element={<><Signup/></>}></Route>
      <Route path='/Login'  element={<><Login/></>}></Route>
      <Route path='/Profile'  element={<><Header/><Profile/><Footer/></>}></Route>
      <Route path='/blog'  element={<><Header/><Blog/><Footer/></>}></Route>
      <Route path='/single_blog/:id' element={<><Header/><Single_blog/><Footer/></>}></Route>
      {/* <Route path='/card_blog/:id' element={<><Header /><Card_blog /><Footer /></>}></Route> */}
      <Route path='/service'  element={<><Header/><Service/><Footer/></>}></Route>
      <Route path='/contact'  element={<><Header/><Contact/><Footer/></>}></Route>
     </Routes>
     </BrowserRouter>
  
     
     </div>
   )
 }
 
 export default App