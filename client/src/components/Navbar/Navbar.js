import React, { useState, useEffect } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import zazaLight from '../../assets/images/zaza-light.png'
import zazaDark from '../../assets/images/zaza-dark.png'

import navLinks from '../../utils/navbarLinks'

import Auth from "../../utils/auth";
import { pluralize } from '../../utils/helpers'

import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { QUERY_SUBCATEGORIES } from '../../utils/queries';


import Search from '../Search/Search'
import CartSummary from '../CartSummary/CartSummary'

const Navbar = ({ setNavClick, navClick }) => {
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
  useEffect(function () {
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
      return links.category === 'fragrance' && links.title === 'body essentials'
    }))

    setFragranceHome(navLinks.filter(links => {
      return links.category === 'fragrance' && links.title === 'home essentials'
    }))
  }, [])


  useEffect(function () {
    setInterval(function () {
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

  const [categoryHoverState, setCategoryHoverState] = useState({});

  // ... other state and useEffect code ...

  // Deals with hover functionalities for the nav links
  const handleCategoryMouseEnter = (categoryName) => {
    setCategoryHoverState((prevState) => ({
      ...prevState,
      [categoryName]: true,
    }));
  };
  const handleCategoryMouseLeave = (categoryName) => {
    setCategoryHoverState((prevState) => ({
      ...prevState,
      [categoryName]: false,
    }));
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Link to='/' onClick={() => Auth.logout()}><p>Logout</p></Link>
      );
    } else {
      return (
        <Link to='/login'><p>Sign In/Register</p></Link>
      );
    }
  }

  // Get the state and dispatch function from the global store context
  const [state, dispatch] = useStoreContext();

  // Extract categories from the state
  const { categories, subcategories } = state;

  // Use Apollo Client's useQuery hook to fetch category data
  const { loading: lodingCategories, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const { loading: loadingSubcategories, data: subcategoryData } = useQuery(QUERY_SUBCATEGORIES);


  if (lodingCategories || loadingSubcategories) {
    return <div>Loading...</div>;
  }

  console.log(categoryData.categories)
  console.log(subcategoryData.subcategories)

  return (
    <>
      <header style={{ color: isHome ? '#FFF9EF' : '#282F2B', background: backgroundScroll }}>
        <nav>
          <div className='navbar'>
            <div className='profile-search'>
              <i className='bx bxs-user-circle bx-md' style={{ color: isHome ? '#FFF9EF' : '#282F2B' }} onMouseOver={profileMouseEnter} onMouseLeave={profileMouseLeave}></i>
              <i className='bx bx-search-alt-2 bx-sm' onClick={() => setSearchOpen(true)}></i>
            </div>
            <div className='zaza-logo'>
              <Link to='/'><img src={isHome ? zazaLight : zazaDark} alt='zaza cream text logo' /></Link>
            </div>
            <div className='nav-and-checkout'>
              <div className='nav'>
                <ul>
                  {categoryData.categories.map(category => (
                    <li key={category.name.toLowerCase()}><Link to={`/${category.name.toLowerCase()}`} style={{ color: isHome ? '#FFF9EF' : '#282F2B' }} 
                    onMouseOver={() => handleCategoryMouseEnter(category.name.toLowerCase())}
                    onMouseLeave={() => handleCategoryMouseLeave(category.name.toLowerCase())}
                    >{category.name}</Link>
                    </li>
                  ))}
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
        <div className='user-profile' style={{ visibility: profileVisibility, backgroundColor: 'white' }} onMouseOver={profileMouseEnter} onMouseLeave={profileMouseLeave}>
          <div>
            <Link to='/profile'><p>Profile</p></Link>
          </div>
          <div>
            {showNavigation()}
            {/* <Link to='/login'><p>Sign In/Register</p></Link> */}
          </div>
        </div>
      </header>

      {/* LINGERIE HOVER DROPDOWN MENU */}
      {categoryData.categories.map(category => (

        <div className={`nav-hover ${category.name.toLowerCase()}-hover`}
        style={{ visibility: categoryHoverState[category.name.toLowerCase()] ? 'visible' : 'hidden' }}
        onMouseOver={() => handleCategoryMouseEnter(category.name.toLowerCase())}
        onMouseLeave={() => handleCategoryMouseLeave(category.name.toLowerCase())}>
          <div>
            <div className={`nav-image ${category.name.toLowerCase()}-nav-image`}>
            </div>
          </div>
          <div>
            <div className='nav-subcategories'>
              <div className='subcategories'>
                {subcategoryData.subcategories.reduce((uniqueTitles, subcategory) => {
                  if (!uniqueTitles.includes(subcategory.title)) {
                    uniqueTitles.push(subcategory.title);
                  }
                  return uniqueTitles;
                }, []).map(title => (
                  <div key={title}>
                    <h4>{title}</h4>
                    {subcategoryData.subcategories
                      .filter(subcategory => subcategory.title === title)
                      .map(subcategory => (
                        (<Link key={`${category.name}.${subcategory.name}`} to={`/${category.name}/${subcategory.name}`}><p onClick={(e) => { setNavClick(e.target.innerText); console.log(e.target.innerText) }}>{subcategory.name}</p></Link>)
                      ))}
                    {/* {subcategoryData.subcategories.map(subcategory => {
                          return (<Link key={`${category.name}.${subcategory.name}`} to={`/${category.name}/${subcategory.name}`}><p onClick={(e) => { setNavClick(e.target.innerText); console.log(e.target.innerText) }}>{subcategory.name}</p></Link>)
                        })} */}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      ))}

      
      <Search setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
      <CartSummary setCartOpen={setCartOpen} cartOpen={cartOpen} />
    </>
  )
}

export default Navbar
