import React, { useState } from 'react'
import './quick-add.css'
import SizeSelect from '../SizesSelect/SizeSelect'
import imageSize from '../../assets/images/hao.jpg'
import image from '../../assets/images/ableton4.jpg'

import { Link } from 'react-router-dom'

function QuickAdd({ setQuickAdd, quickAdd, name, subcategory, images, price, id }) {
    const [imageSrc, setImageSrc] = useState(imageSize)


  return (
    <div className='quick-add' style={{ visibility: quickAdd ? 'visible' : 'hidden'}}>
        <div className={quickAdd ? 'quick-add-modal open' : 'quick-add-modal close'}>
            <div className='modal-images'>
                <div className='all-images'>
                    <div className='image'>
                        <img src={imageSize} alt='image description' onMouseEnter={(e) => setImageSrc(e.target.src)}/>
                    </div>
                    <div className='image'>
                        <img src={image} alt='image description' onMouseEnter={(e) => setImageSrc(e.target.src)}/>
                    </div>
                </div>
                <div className='displayed-image' style={{ backgroundImage: `url(${imageSrc})` }}>
                </div>
            </div>
            <div className='modal-content'>
                <div className='name-favorite'>
                    <div className='name'>
                        <p>{subcategory}</p>
                        <p>{name}</p>
                    </div>
                    <div className='favorite'>
                        <i className='bx bx-heart bx-md' ></i>
                    </div>
                </div>
                <div className='price'>
                    <p>${price}</p>
                </div>
                <div className='size-guide'>
                    {/* <p>Size Guide</p> */}
                </div>
                <SizeSelect/>
                <div className='add-to-bag'>
                    <h4>+ Add to Bag</h4>
                </div>
                <div className='full-details'>
                    <Link to={`/product/${id}`} >
                    <p>View full details</p>
                    </Link>
                </div>
                <div className='close-btn'>
                    <button onClick={() => setQuickAdd(false)}>CLOSE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickAdd