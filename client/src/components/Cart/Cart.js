import React from 'react'
import './cart.css'
import '../Search/search.css'

import { loadStripe } from '@stripe/stripe-js';

import image from '../../assets/images/ableton4.jpg'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  
  
  return (
    <div>
      Cart
    </div>
  )
}

export default Cart