import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlacedOrder from './pages/PlacedOrder'
import Orders from './pages/Orders'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'
import SearchBar from './Component/SearchBar'



const App =()=>{
  return(
    <div className='px-4 sm:px[5vw] md:px[7vw] lg:px-[9vw]'>
<NavBar/>
<SearchBar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Collection' element={<Collection/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Product/:ProductId' element={<Product/>}/>
  <Route path='/Products/:ProductId' element={<Product />} />

  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/PlacedOrder' element={<PlacedOrder/>}/>
  <Route path='/Orders' element={<Orders/>}/>
</Routes>
<Footer/>
    </div>
  )
}
export default App