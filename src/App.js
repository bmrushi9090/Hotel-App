import React from 'react'
import NavBar from './Components/NavBar'
import Veg from './Components/Veg'
import NonVeg from './Components/NonVeg'
import Carousel from './Components/Carousel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
// import VegCategory from './Components/VegCategory'
// import { createContext } from 'react'
// import { Cartcont } from './Context/CartContext'
import User from './Components/User'

const App = () => {
  return (

    <>
      <Router>
        {/* <Veg /> */}
        <NavBar />
        {/* <Carousel /> */}
        {/* <VegCategory /> */}
        <Routes>
          <Route path='/' element={<Veg />} />
          <Route exact path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='Veg' element={<Veg />} />
          <Route path='NonVeg' element={<NonVeg />} />
          <Route path='User' element={<User />} />
        </Routes>

      </Router>
      {/* <Veg /> */}
      {/* <NonVeg />  */}
      {/* <Cart/> */}

    </>
  )
}

export default App