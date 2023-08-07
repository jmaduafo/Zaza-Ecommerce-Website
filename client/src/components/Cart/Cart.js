import React, { useEffect } from 'react'
import './cart.css'
import '../Search/search.css'

import { loadStripe } from '@stripe/stripe-js';

import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import {
  ADD_MULTIPLE_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY
} from '../../utils/action';

import Counter from '../Counter/Counter';
import image from '../../assets/images/ableton4.jpg'
import { Link } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
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

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

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
    <div className='main-cart-container'>
      <div className=' main-cart-content'>
        <h2>Your Cart (10)</h2>
        <div className='main-cart-border main-cart-wrapper'>
          {/* Repeated Div */}
          {state.cart.map(cartItem => (
            <div className='main-cart'>
              <div className='main-cart-image'>
                {/* Links to detail page by id */}
                <Link to={`/product/${cartItem._id}`}><img src={cartItem.image[0]} alt={cartItem.description} /></Link>
              </div>
              <div className='main-cart-info'>
                <div className='main-cart-title-price'>
                  <p>{cartItem.name}</p>
                  <h4>${cartItem.price}</h4>
                </div>
                <Counter />
                <div className='main-cart-size-trash'>
                  {/* size */}
                  <p>M,L</p>
                  <i className='bx bx-trash' ></i>
                </div>
              </div>
            </div>
          ))}


          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>
          <div className='main-cart'>
            <div className='main-cart-image'>
              {/* Links to detail page by id */}
              <Link to=''><img src={image} alt='' /></Link>
            </div>
            <div className='main-cart-info'>
              <div className='main-cart-title-price'>
                <p>Gia Georgia Bikini Set</p>
                <h4>$34.56</h4>
              </div>
              <Counter />
              <div className='main-cart-size-trash'>
                <p>M,L</p>
                <i className='bx bx-trash' ></i>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='main-cart-border main-cart-checkout'>
        <p>Subtotal</p>
        <p className='main-cart-total'>${calculateTotal()}</p>
        <button>CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart