import React, { useState } from 'react'
import './productsDisplay.css'
import QuickAdd from '../../components/QuickAdd/QuickAdd'
import Loader from '../../components/Loader/Loader'
import Error from '../Error/Error'

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';


const ProductsDisplay = ({ title }) => {
  const [quickAdd, setQuickAdd] = useState(false)

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS)
  const { subcategory } = useParams();

  if (loading) {
    return <Loader/>;
  }

  

  return (
    <>

      {/* <QuickAdd setQuickAdd={setQuickAdd} quickAdd={quickAdd}  /> */}
      <div className='products-display-section'>

        <div className='products-display-top'>
          <h2>{subcategory ? subcategory : title}</h2>
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
          {data.products.some(product => product.subcategory.name === subcategory) ? (

             data.products.map(product => {

              if (product.subcategory.name === subcategory ) {
                return (

                  <div className='product' >
                    <div className='product-image'>
                    <Link to={`/product/${product._id}`} >
                      <img src={product.image[0]} />
                      </Link>
                    </div>
                    <div className='product-info'>
                      <div className='title-rating'>
                      <Link to={`/product/${product._id}`} >
                        <p>{product.name}</p>
                          </Link>
                        <i className='bx bx-heart bx-sm' ></i>
                      </div>
                      <div className='price-favorite'>
                        <p>${product.price}</p>
                      </div>
                    </div>
                    <div className='product-add' onClick={() => setQuickAdd(true)}  >
                      <p>+ Quick Add</p>
                    </div>
                    {quickAdd && (
          <QuickAdd
            setQuickAdd={setQuickAdd}
            quickAdd={quickAdd}
    product={product}
            
          />
        )}
                  </div>
                );
              }
            }) 
          ) : <div className='no-products'>No products currently available.</div>}

        </div>
      </div>
     
    </>
  )
}

export default ProductsDisplay