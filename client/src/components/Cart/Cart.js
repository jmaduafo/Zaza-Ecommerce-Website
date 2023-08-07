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

  function calculateTotalItems() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item
    })
  }

  function submitCheckout() {
    getCheckout({
      variables: {
        products: [...state.cart],
      },
    });
  }


  const onChange = (e, _id) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: _id
      });
      idbPromise('cart', 'delete', _id);
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { _id, purchaseQuantity: parseInt(value) });
    }
  }

  // const addToCart = () => {
  //   const itemInCart = state.cart.find((cartItem) => cartItem._id === item._id)
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: item._id,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //     });
  //     idbPromise('cart', 'put', {
  //       ...itemInCart,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //     });
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       product: { ...item,
  //            purchaseQuantity: 1,
  //           //  sizeSelected: { 
  //           //     topSizes: selectedSizes.topSizes,
  //           //     bottomSizes: selectedSizes.bottomSizes,
  //           //     cupSizes: selectedSizes.cupSizes,
  //           //     bandSizes: selectedSizes.cupSizes,
  //           //     sizes: selectedSizes.sizes
  //           // }, 
  //         }
        
  //     });
  //     idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
  //   }
  // }



  return (
    <div className='main-cart-container'>
      <div className=' main-cart-content'>
        <h2>Your Cart ({state.cart.length ? state.cart.length : 0 })</h2>
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
                <input
            type="number"
            placeholder="1"
            value={cartItem.purchaseQuantity}
            onChange={(e) => onChange(e, cartItem._id)}
          />
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