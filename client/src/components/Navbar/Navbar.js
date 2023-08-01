import React, { useState, useEffect } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import zazaLight from '../../assets/images/zaza-light.png'
import zazaDark from '../../assets/images/zaza-dark.png'

const Navbar = () => {
  const [isHome, setIsHome] = useState(true)
  const [backgroundScroll, setBackgroundScroll] = useState('transparent')

  

  useEffect(function() {
    setInterval(function() {
      if (window.location.pathname === '/') {
        setIsHome(true)
      } else {
        setIsHome(false)
      }
    }, 400)

    if (window.scrollHeight > 200) {
      setBackgroundScroll('linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .0))')
    } else {
      setBackgroundScroll('transparent')
    }
    
  }, [isHome])

  return (
    <header style={{ color: isHome ? '#FFF9EF' : '#282F2B', background: backgroundScroll}}>
      <nav>
        <div className='navbar'>
          <div className='profile-search'>
            <Link to='/login' style={{ color: isHome ? '#FFF9EF' : '#282F2B'}}><i className='bx bxs-user-circle bx-md' ></i></Link>
            <i className='bx bx-search-alt-2 bx-sm' ></i>
          </div>
          <div className='zaza-logo'>
            <Link to='/'><img src={isHome ? zazaLight : zazaDark} alt='zaza cream text logo'/></Link>
          </div>
          <div className='nav-and-checkout'>
            <div className='nav'>
              <ul>
                <li><Link to='/lingerie' style={{ color: isHome ? '#FFF9EF' : '#282F2B'}}>Lingerie</Link></li>
                <li><Link to='/fragrance' style={{ color: isHome ? '#FFF9EF' : '#282F2B'}}>Fragrances</Link></li>
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