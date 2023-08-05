import React, { useState } from 'react'
import './productsDisplay.css'
import QuickAdd from '../../components/QuickAdd/QuickAdd'
import Loader from '../../components/Loader/Loader'
import { useParams } from 'react-router-dom';


import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';


const ProductsDisplay = ({ title }) => {
  const [quickAdd, setQuickAdd] = useState(false)

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS)

  const { subcategory } = useParams();

  console.log(data)
  // console.log(data.products[0].image[0])
  console.log(subcategory)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <QuickAdd setQuickAdd={setQuickAdd} quickAdd={quickAdd} />
      <div className='products-display-section'>

        <div className='products-display-top'>
          <h2>{subcategory}</h2>
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

                if (product.subcategory.name === subcategory) {
                  return (
                    <div className='product'>
                      <div className='product-image'>
                        <img src={product.image[0]} />
                      </div>
                      <div className='product-info'>
                        <div className='title-rating'>
                          <p>{product.name}</p>
                          <i className='bx bx-heart bx-sm' ></i>
                          {/* <div>
                    <i className='bx bxs-star' ></i>
                    <p>4.7</p>
                    </div> */}
                        </div>
                        <div className='price-favorite'>
                          <p>${product.price}</p>
                        </div>
                      </div>
                      <div className='product-add' onClick={() => setQuickAdd(true)}>
                        <p>+ Quick Add</p>
                      </div>
                    </div>
                  );
                }
                return null;
              })
  ) : (
            <div>No products currently available.</div>
          )}




        </div>
      </div>
    </>
  )
}

export default ProductsDisplay