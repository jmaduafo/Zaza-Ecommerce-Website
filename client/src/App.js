import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import ProductsDisplay from './pages/ProductsDisplay/ProductsDisplay'
import Cart from './components/Cart/Cart';
import Checkout from './pages/Checkout/Checkout'
import Profile from './pages/Profile/Profile'
import Success from './pages/Success/Success'
import Error from './pages/Error/Error'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import { useState } from 'react'

function App() {
  const [navClick, setNavClick] = useState('')

  const [allLingerie, setAllLingerie] = useState('All Lingerie')
  const [allFragrance, setAllFragrance] = useState('All Fragrance')

  return (
    <Router>
      <div className="App">
        <StoreProvider>
        <Navbar setNavClick={setNavClick} navClick={navClick}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/lingerie' element={<ProductsDisplay title={allLingerie}/>}/>
          <Route path='/fragrance' element={<ProductsDisplay title={allFragrance}/>}/>
          <Route path="/lingerie/:subcategory" element={<ProductsDisplay />} />
          <Route path="/fragrance/:subcategory" element={<ProductsDisplay />} />
          {/* <Route path={navClick !== '' ? `/lingerie/${navClick}` : '/lingerie'} element={<ProductsDisplay title={navClick}/>}/>
          <Route path={navClick !== '' ? `/fragrance/${navClick}` : '/fragrance'} element={<ProductsDisplay title={navClick}/>}/> */}
          {/* <Route path='/products/:id' element={<Detail/>}/>
          <Route path='/checkout' element={<Checkout/>}/> */}
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/profile' element={<Profile/>}/> 
          <Route path='/success' element={<Success/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
        <Footer/>
        </StoreProvider>
      </div>
    </Router>
  );
}



export default App;
