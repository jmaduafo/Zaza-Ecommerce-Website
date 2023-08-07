import React from 'react'
import './detail.css'

import SizeSelect from '../../components/SizesSelect/SizeSelect'
import Counter from '../../components/Counter/Counter'
import { Link, useParams } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from '../../utils/helpers';
import { UPDATE_CART_QUANTITY, ADD_TO_CART } from '../../utils/action';


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

    const [selectedSizes, setSelectedSizes] = useState({});
    const [state, dispatch] = useStoreContext();

  
    const { cart } = state
  
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

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === item._id)
        if (itemInCart) {
          dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: item._id,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
          });
          idbPromise('cart', 'put', {
            ...itemInCart,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
          });
        } else {
          dispatch({
            type: ADD_TO_CART,
            product: { ...item,
                 purchaseQuantity: 1,
                 sizeSelected: { 
                    topSizes: selectedSizes.topSizes,
                    bottomSizes: selectedSizes.bottomSizes,
                    cupSizes: selectedSizes.cupSizes,
                    bandSizes: selectedSizes.cupSizes,
                    sizes: selectedSizes.sizes
                }, }
            
          });
          idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
      }


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
                                    sizeGuide={sizeGuide}
                                    sizeData={item[sizeGuide]}
                                    selectedSize={selectedSizes[sizeGuide]}
                                    onSelectSize={(sizeGuide, size) => setSelectedSizes(prevSelectedSizes => ({
                                        ...prevSelectedSizes,
                                        [sizeGuide]: size
                                    }))}
                                    />
                                );
                            }

                        })}
                    </div>
                    <div className='add-to-bag'>
                        <h4 onClick={addToCart}>+ Add to Bag</h4>
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
