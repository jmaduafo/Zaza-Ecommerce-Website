import React, { useState, useEffect } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import zazaLight from '../../assets/images/zaza-light.png'

const Navbar = () => {
  const [isHome, setIsHome] = useState(true)

  useEffect(function() {
    if (window.location.pathname === '/') {
      setIsHome(true)
    } else {
      setIsHome(false)
    }

    console.log(isHome)
  }, [isHome])

  return (
    <header style={{ backgroundColor: isHome ? 'transparent' : '#D1DCDA'}}>
      <nav>
        <div className='navbar'>
          <div className='profile-search'>
            <Link to='/login'><i className='bx bxs-user-circle bx-md' ></i></Link>
            <i className='bx bx-search-alt-2 bx-sm' ></i>
          </div>
          <div className='zaza-logo'>
            <Link to='/'><img src={zazaLight} alt='zaza cream text logo'/></Link>
          </div>
          <div className='nav-and-checkout'>
            <div className='nav'>
              <ul>
                <li><Link to='/lingerie'>Lingerie</Link></li>
                <li><Link to='/fragrance'>Fragrances</Link></li>
              </ul>
            </div>
            <div className='checkout-favorite'>
              <i className='bx bxs-heart bx-sm' ></i>
              <div className='checkout'>
                <i className='bx bx-shopping-bag bx-sm'></i>
                <div className='cart-count'>
                  <p>2</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar