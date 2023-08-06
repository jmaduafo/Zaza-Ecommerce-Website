import React from 'react'
import './success.css'

import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='success-page'>
      <div className='success-card'>
        <div className='top-portion'>
          <div className='check-mark'>
            <i className='bx bxs-check-circle'></i>
          </div>
        </div>
        <div className='bottom-portion'>
          <p>Payment was successful!</p>
          <Link to='/'><button>RETURN HOME</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Success