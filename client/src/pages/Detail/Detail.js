import React from 'react'
import './detail.css'

import SizeSelect from '../../components/SizesSelect/SizeSelect'
import Counter from '../../components/Counter/Counter'
import { Link } from "react-router-dom";

import image from '../../assets/images/hao.jpg'
import image2 from '../../assets/images/ableton4.jpg'
import { useState } from 'react';

function Detail({item}) {
    // const {
    //     _id,
    //     name,
    //     description,
    //     image,
    //     price,
    //     stock,
    //     bandSizes,
    //     cupSizes,
    //     colors
    //   } = item;

    const [backgroundHover, setBackgroundHover] = useState(image)

  return (
    <div className='detail-container'>
        <div className='detail-content'>
            <div className='detail-images'>
                <div className='detail-overview-images'>
                    <div>
                        <img src={image} alt='' onMouseEnter={(e) => setBackgroundHover(e.target.src) } />
                    </div>
                    <div>
                        <img src={image2} alt='' onMouseEnter={(e) => setBackgroundHover(e.target.src) }/>
                    </div>
                </div>
                <div className='detail-main-image' style={{ backgroundImage: `url(${backgroundHover}` }}>
                </div>
            </div>
            <div className='detail-info'>
                <div className='names-favorite'>
                    <div>
                        <p>Slips</p>
                        <h4>Winter Fall Silk Slip</h4>
                    </div>
                    <i className='bx bx-heart bx-md' ></i>
                </div>
                <div className='detail-price'>
                    <p>$45</p>
                </div>
                <p>Size Guide</p>
                <div>
                    <SizeSelect/>
                </div>
                <div className='add-to-bag'>
                    <h4>+ Add to Bag</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail
