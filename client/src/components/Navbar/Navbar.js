import React, { useState, useEffect } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import zazaLight from '../../assets/images/zaza-light.png'
import zazaDark from '../../assets/images/zaza-dark.png'

import navLinks from '../../utils/navbarLinks'

import Search from '../Search/Search'
import CartSummary from '../CartSummary/CartSummary'

const Navbar = ({setNavClick, navClick}) => {
  const [isHome, setIsHome] = useState(true)
  const [backgroundScroll, setBackgroundScroll] = useState('transparent')

  const [profileVisibility, setProfileVisibility] = useState('hidden')
  const [lingerieVisibility, setLingerieVisibility] = useState('hidden')
  const [fragranceVisibility, setFragranceVisibility] = useState('hidden')

  const [lingerieStyle, setLingerieStyle] = useState()
  const [lingeriePanties, setLingeriePanties] = useState()
  const [lingerieCollection, setLingerieCollection] = useState()

  const [fragranceBody, setFragranceBody] = useState()
  const [fragranceHome, setFragranceHome] = useState()

  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  
  // Filtering the nav links by title and category to render the subcategories under menu
  useEffect(function() {
    setLingerieStyle(navLinks.filter(links => {
      return links.category === 'lingerie' && links.title === 'style'
    }))

    setLingeriePanties(navLinks.filter(links => {
      return links.category === 'lingerie' && links.title === 'panties'
    }))

    setLingerieCollection(navLinks.filter(links => {
      return links.category === 'lingerie' && links.title === 'shop by collection'
    }))

    setFragranceBody(navLinks.filter(links => {
      return links.category === 'fragrances' && links.title === 'body essentials'
    }))

    setFragranceHome(navLinks.filter(links => {
      return links.category === 'fragrances' && links.title === 'home essentials'
    }))
  }, [])

  
  useEffect(function() {
    setInterval(function() {
      if (window.location.pathname === '/') {
        setIsHome(true)
      } else {
        setIsHome(false)
      }
    }, 400)

    if (document.body.scrollTop >= 200) {
      setBackgroundScroll('white')
    } else if (document.body.scrollTop < 200) {
      setBackgroundScroll('transparent')
    }

    
  }, [isHome])

  console.log(document.body.scrollTop)

  // Deals with hover functionalities for the nav links
  function profileMouseEnter() {
    setProfileVisibility('visible')
  }
  
  function profileMouseLeave() {
    setProfileVisibility('hidden')
  }

  function lingerieMouseEnter() {
    setLingerieVisibility('visible')
  }
  
  function lingerieMouseLeave() {
    setLingerieVisibility('hidden')
  }

  function fragranceMouseEnter() {
    setFragranceVisibility('visible')
  }
  
  function fragranceMouseLeave() {
    setFragranceVisibility('hidden')
  }

  return (
    <>
    <header style={{ color: isHome ? '#FFF9EF' : '#282F2B', background: backgroundScroll}}>
      <nav>
        <div className='navbar'>
          <div className='profile-search'>
            <i className='bx bxs-user-circle bx-md' style={{ color: isHome ? '#FFF9EF' : '#282F2B'}} onMouseOver={profileMouseEnter} onMouseLeave={profileMouseLeave}></i>
            <i className='bx bx-search-alt-2 bx-sm' onClick={() => setSearchOpen(true)}></i>
          </div>
          <div className='zaza-logo'>
            <Link to='/'><img src={isHome ? zazaLight : zazaDark} alt='zaza cream text logo'/></Link>
          </div>
          <div className='nav-and-checkout'>
            <div className='nav'>
              <ul>
                <li><Link to='/lingerie' style={{ color: isHome ? '#FFF9EF' : '#282F2B'}} onMouseOver={lingerieMouseEnter} onMouseLeave={lingerieMouseLeave}>Lingerie</Link></li>
                <li><Link to='/fragrances' style={{ color: isHome ? '#FFF9EF' : '#282F2B'}} onMouseOver={fragranceMouseEnter} onMouseLeave={fragranceMouseLeave}>Fragrances</Link></li>
              </ul>
            </div>
            <div className='checkout-favorite'>
              <i className='bx bxs-heart bx-sm' ></i>
              <div className='checkout' onMouseEnter={() => setCartOpen(true)} onMouseLeave={() => setCartOpen(false)}>
                <i className='bx bx-shopping-bag bx-sm'></i>
                <div className='cart-count'>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* USER PROFILE DROPDOWN MENU */}
      <div className='user-profile' style={{ visibility: profileVisibility, backgroundColor: 'white'}} onMouseOver={profileMouseEnter} onMouseLeave={profileMouseLeave}>
        <div>
          <Link to='/profile'><p>Profile</p></Link>
        </div>
        <div>
          <Link to='/login'><p>Sign In/Register</p></Link>
        </div>
      </div>
    </header>
    {/* LINGERIE HOVER DROPDOWN MENU */}
    <div className='nav-hover lingerie-hover' style={{ visibility: lingerieVisibility}} onMouseOver={lingerieMouseEnter} onMouseLeave={lingerieMouseLeave}>
      <div>
        <div className='nav-image lingerie-nav-image'>
        </div>
      </div>
      <div>
        <div className='nav-subcategories'>
          <div className='subcategories'>
            <div>
              <h4>Style</h4>
              {lingerieStyle?.map(lingerie => {
                return (<Link key={lingerie.subcategory} to={`/lingerie/${lingerie.subcategory}`}><p onClick={(e) => { setNavClick(e.target.innerText); console.log(e.target.innerText)}}>{lingerie.subcategory}</p></Link>)
              })}
            </div>
            <div>
              <h4>Panties</h4>
              {lingeriePanties?.map(lingerie => {
                return (<Link key={lingerie.subcategory} to={`/lingerie/${lingerie.subcategory}`}><p onClick={(e) => setNavClick(e.target.innerText)}>{lingerie.subcategory}</p></Link>)
              })}
            </div>
          </div>
          <div className='line'></div>
          <div className='subcategories'>
            <div>
                <h4>Shop By Collection</h4>
                {lingerieCollection?.map(lingerie => {
                return (<Link key={lingerie.subcategory} to={`/lingerie/${lingerie.subcategory}`}><p onClick={(e) => setNavClick(e.target.innerText)}>{lingerie.subcategory}</p></Link>)
              })}
              </div>
          </div>
        </div>
      </div>
    </div>
    {/* FRAGRANCE HOVER DROPDOWN MENU */}
    <div className='nav-hover fragrance-hover' style={{ visibility: fragranceVisibility }} onMouseOver={fragranceMouseEnter} onMouseLeave={fragranceMouseLeave}>
      <div>
        <div className='nav-image fragrance-nav-image'>
        </div>
      </div>
      <div>
      <div className='nav-subcategories'>
          <div className='subcategories'>
            <div>
              <h4>Body Essentials</h4>
              {fragranceBody?.map(fragrance => {
                return (<Link key={fragrance.subcategory} to={`/fragrances/${fragrance.subcategory}`}><p onClick={(e) => setNavClick(e.target.innerText)}>{fragrance.subcategory}</p></Link>)
              })}
            </div>
          </div>
          <div className='line'></div>
          <div className='subcategories'>
            <div>
                <h4>Home Essentials</h4>
                {fragranceHome?.map(fragrance => {
                return (<Link key={fragrance.subcategory} to={`/fragrances/${fragrance.subcategory}`}><p onClick={(e) => setNavClick(e.target.innerText)}>{fragrance.subcategory}</p></Link>)
              })}
              </div>
          </div>
        </div>
      </div>
    </div>
    <Search setSearchOpen={setSearchOpen} searchOpen={searchOpen}/>
    <CartSummary setCartOpen={setCartOpen} cartOpen={cartOpen}/>
  </>
  )
}

export default Navbar