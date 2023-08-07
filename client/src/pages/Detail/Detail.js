import React from 'react'
import './detail.css'

import SizeSelect from '../../components/SizesSelect/SizeSelect'
import Counter from '../../components/Counter/Counter'
import { Link, useParams } from "react-router-dom";

import { useState } from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

import Loader from '../../components/Loader/Loader';
import Error from '../Error/Error';

import { useQuery } from '@apollo/client'
import { QUERY_PRODUCTS } from '../../utils/queries';


function Detail() {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const { id } = useParams();


    const [backgroundHover, setBackgroundHover] = useState({})

    if (loading) {
        return (
            <Loader/>
        )
    }

    if (!data) {
        return (
            <Error/>
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
                            <div key={image}>
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
                            <p>{item?.subcategory?.name}</p>
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
                            if (item.hasOwnProperty(sizeGuide) && item[sizeGuide].length) {
                                return (
                                    <SizeSelect
                                        key={sizeGuide}
                                        sizeGuide={item[sizeGuide] === [] ? '' : sizeGuide}
                                        sizeData={item[sizeGuide]}
                                    />
                                );
                            }

                        })}
                    </div>
                    <div className='add-to-bag'>
                        <h4>+ Add to Bag</h4>
                    </div>

                    {/* Description Accordian */}
                    <Accordion defaultIndex={[0]} allowMultiple={true} className='description-accordian'>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                Description
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} className='desc-text'>
                                {item.description}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Detail
