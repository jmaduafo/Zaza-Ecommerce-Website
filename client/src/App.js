import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import ProductsDisplay from './pages/ProductsDisplay/ProductsDisplay'
import Checkout from './pages/Checkout/Checkout'
import Profile from './pages/Profile/Profile'
import Success from './pages/Success/Success'
import Error from './pages/Error/Error'


import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/lingerie' element={<ProductsDisplay/>}/>
          <Route path='/fragrance' element={<ProductsDisplay/>}/>
          {/* <Route path='/products/:id' element={<Detail/>}/>
          <Route path='/checkout' element={<Checkout/>}/> */}
          <Route path='/profile' element={<Profile/>}/> */
          <Route path='/success' element={<Success/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
