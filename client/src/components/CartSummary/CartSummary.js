import React, { useState, useEffect } from 'react'
import './cart-summary.css'
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/action';

import image from '../../assets/images/jakob-owens-z5iB1iKuXEs-unsplash.jpg'
import Counter from '../Counter/Counter';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CartSummary = ({ setCartOpen, cartOpen }) => {
    const [counter, setCounter] = useState(1);

    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
        stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
        });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
        const cart = await idbPromise('cart', 'get');
        dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        // IF CART IS EMPTY
        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    // CALCULATES TOTAL AMOUNT OF ITEMS IN CART  
    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
        sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        getCheckout({
        variables: { 
            products: [...state.cart],
        },
        });
    }
    
  return (
    <div className='cart-page' style={{ visibility: cartOpen ? 'visible' : 'hidden'}} onMouseEnter={() => setCartOpen(true)} onMouseLeave={() => setCartOpen(false)}>
        <h3>Your Bag (2)</h3>
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
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
                        <i className='bx bxs-trash'></i>
                    </div>
                </div>
            </div>            
                      
        </div>
        <div className='total-clear-all'>
            <p>Clear All</p>
            <h4>$120.00</h4>
        </div>
        <div className='cart-checkout'>
            <Link to='/cart'><button>VIEW CART</button></Link>
        </div>
        {/* <div className='no-products'>
            <p>Your bag is empty. Want to add to it?</p>
            <Link to='/lingerie'><button>Shop Now</button></Link>
        </div> */}
    </div>
  )
}

export default CartSummary