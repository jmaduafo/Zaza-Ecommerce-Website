import React from 'react'
import './home-slide.css'
import { Link } from 'react-router-dom'

function HomeSlide() {
  return (
    <div className='home-slide'>
        <div className='slide-image'>
            <div className='cover'></div>
            <div className='animated-slide'></div>
            <div className='take-a-leap'>
                <h2>Take a leap into the Zaza way</h2>
                <Link to='/'><button>Shop Now</button></Link>
            </div>
        </div>
    </div>
  )
}

export default HomeSlide