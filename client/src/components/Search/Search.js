import React from 'react'
import './search.css'
import image from '../../assets/images/ableton4.jpg'

function Search({ setSearchOpen, searchOpen }) {
  return (
    <div className={searchOpen ? 'search-page open': 'search-page close'}>
    <div className={searchOpen ? 'search-container open' : 'search-container close'}>
        <div className='search-close'>
            <div className='search'>
                <i className='bx bx-search bx-sm'></i>
                <input type='text' placeholder='Search'/>
            </div>
            <div className='close'>
                <i className='bx bx-x' onClick={() => setSearchOpen(false)}></i>
            </div>
        </div>
        <div className='search-products'>
            <p className='results'>50 Results</p>
            <div className='product-wrapper'>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
                <div className='products'>
                    <div className='products-image'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='products-info'>
                        <p>Javascript Halter Bikini</p>
                        <p>$30</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Search