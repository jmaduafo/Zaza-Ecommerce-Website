import React, { useState } from 'react'
import './productsDisplay.css'
import QuickAdd from '../../components/QuickAdd/QuickAdd'
import Loader from '../../components/Loader/Loader'

const ProductsDisplay = ({title}) => {
  const [quickAdd, setQuickAdd] = useState(false)

  return (
    <>
    <QuickAdd setQuickAdd={setQuickAdd} quickAdd={quickAdd}/>
    <div className='products-display-section'>
      <div className='products-display-top'>
        <h2>{title}</h2>
        <div className='filter'>
          <div className='filter-title'>
            <i className='bx bx-filter bx-sm'></i>
            <p>Filter By:</p>
          </div>
          <p>Size</p>
          <p>Color</p>
          <p>Style</p>
        </div>
        <div className='filter-categories'></div>
      </div>
      <div className='products-display-grid'>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        <div className='product'>
          <div className='product-image'>
            <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
          </div>
          <div className='product-info'>
            <div className='title-rating'>
              <p>Winter Fall Silk Slip</p>
              <i className='bx bx-heart bx-sm' ></i>
              {/* <div>
                <i className='bx bxs-star' ></i>
                <p>4.7</p>
              </div> */}
            </div>
            <div className='price-favorite'>
              <p>$35</p>
            </div>
          </div>
          <div className='product-add' onClick={() => setQuickAdd(true)}>
            <p>+ Quick Add</p>
          </div>
        </div>
        
      </div> 
    </div>
    </>
  )
}

export default ProductsDisplay