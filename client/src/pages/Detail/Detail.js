import React from 'react'
import './detail.css'

import SizeSelect from '../../components/SizesSelect/SizeSelect'
import Counter from '../../components/Counter/Counter'
import { Link, useParams } from "react-router-dom";

import image from '../../assets/images/hao.jpg'
import image2 from '../../assets/images/ableton4.jpg'
import { useState } from 'react';

import { useQuery } from '@apollo/client'
import { QUERY_PRODUCTS } from '../../utils/queries';


function Detail() {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const { id } = useParams();


    const [backgroundHover, setBackgroundHover] = useState({})

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (!data) {
        return (
            <div>404</div>
        )
    }

    let item = data.products.find((product) => product._id === id);

    const keysToCheck = ['topSizes', 'bottomSizes', 'cupSizes', 'bandSizes', 'sizes'];

    const defaultImage = item.image[0];


    return (
        <div className='detail-container'>
            <div className='detail-content'>
                <div className='detail-images'>
                    <div className='detail-overview-images'>
                        {item.image.map(image => (
                            <div>
                                <img src={image} alt='' onMouseEnter={(e) => setBackgroundHover(e.target.src)} onLoad={(e) => setBackgroundHover(defaultImage) } />
                            </div>
                        ))}
                    </div>
                    {/* <div className='detail-main-image' style={{backgroundImage: backgroundHover ? `url(${backgroundHover})` : `url${item.image[0]}` }}> */}
                    <div className='detail-main-image'   style={{ backgroundImage: `url(${backgroundHover})` }}>
                    </div>
                </div>
                <div className='detail-info'>
                    <div className='names-favorite'>
                        <div>
                            <p>{item.subcategory.name}</p>
                            <h4>{item.name}</h4>
                        </div>
                        <i className='bx bx-heart bx-md' ></i>
                    </div>
                    <div className='detail-price'>
                        <p>${item.price}</p>
                    </div>
                    <p>Size Guide</p>
                    <div>
                        {keysToCheck.map(sizeGuide => {
                            if (item.hasOwnProperty(sizeGuide)) {
                                return (
                                    <SizeSelect
                                        key={sizeGuide}
                                        sizeGuide={sizeGuide}
                                        sizeData={item[sizeGuide]}
                                    />
                                );
                            }
                            // return null
                        })}
                    </div>
                    <div>
                        <p>
                            {item.description}
                        </p>
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
