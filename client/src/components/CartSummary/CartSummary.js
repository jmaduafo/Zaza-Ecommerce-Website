import React, { useState, useEffect } from 'react'
import './cart-summary.css'
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/action';

import image from '../../assets/images/jakob-owens-z5iB1iKuXEs-unsplash.jpg'
import Counter from '../Counter/Counter';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CartSummary = ({ setCartOpen, cartOpen, item }) => {
    const [counter, setCounter] = useState(1);

    const [deleteItem, setDeleteItem] = useState(false)

    const [currentProduct, setCurrentProduct] = useState({});

    const [state, dispatch] = useStoreContext();

     //   HANDLES PRODUCT DELETE
    const handleCart = () => {
        setDeleteItem(true)

        if (deleteItem) {
          dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
          });
          idbPromise('cart', 'delete', { ...item });
    
        }
      }

    //   HANDLES THE CHANGE IN QUANTITY
    useEffect(function() {
        if (item) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(counter)
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(counter) });
        }
               
    }, [counter])

    function handleClear() {
        idbPromise('cart', 'deleteAll').then((item) => {
            dispatch({
              type: CLEAR_CART,
              item: item,
            });
        });
    }

    
    // CALCULATES TOTAL AMOUNT OF ITEMS IN CART  
    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
        sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }
    
  return (
    <div className='cart-page' style={{ visibility: cartOpen ? 'visible' : 'hidden'}} onMouseEnter={() => setCartOpen(true)} onMouseLeave={() => setCartOpen(false)}>
        <h3>Your Bag ({state.cart.length ? state.cart.length : 0})</h3>

        {state.cart.length ? 
        (
        <>
        <div className='cart-display'>
            <div className='cart-summary-item'>
                <div className='cart-summary-item-image'>
                    <img src={image} alt=''/>
                </div>
                <div className='cart-summary-content'>
                    <p className='cart-summary-title'>Easter Lavendar Bikini Set</p>
                    <div className='price-counter'>
                        <p>$45</p>
                        <Counter setCounter={setCounter} counter={counter}/>
                    </div>
                    <div className='size-delete-item'>
                        <p>M</p>
                        <i className='bx bxs-trash' onClick={handleCart}></i>
                    </div>
                </div>
            </div>        
                      
        </div> 
        <div className='total-clear-all'>
            <p onClick={handleClear}>Clear All</p>
            <h4>{calculateTotal}</h4>
        </div>
        <div className='cart-checkout'>
            <Link to='/cart'><button>VIEW CART</button></Link>
        </div>
        </>)
        :
        (<div className='no-products'>
            <p>Your bag is empty. Want to add to it?</p>
            <Link to='/lingerie'><button>Shop Now</button></Link>
        </div>)
    } 
    </div>
  )
}

export default CartSummary