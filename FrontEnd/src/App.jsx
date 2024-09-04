import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Collection from './pages/Collection'
const App =()=>{
  return(
    <div className='px-4 sm:px[5vw] md:px[7vw] lg:px-[9vw]'>
<NavBar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Collection' element={<Collection/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Product/:ProductId' element={<Product/>}/>
  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/PlacedOrder' element={<PlacedOrder/>}/>
  <Route path='/Orders' element={<Orders/>}/>
</Routes>
    </div>
  )
}
export default App