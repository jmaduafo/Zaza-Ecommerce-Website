import React from 'react'
import './signup.css'
import '../Login/login.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='login-signup signup-section'>
      <div className='card signup-card'>
        <h3>Create an Account</h3>
        <form className='zaza-form signup-form'>
          <div className='zaza-input'>
            <label for=''>
              First Name *
              <input type='text'/>
            </label>
            <label for=''>
              Last Name *
              <input type='text'/>
            </label>
            <label for=''>
              Email Address *
              <input type='email'/>
            </label>
            <label for=''>
              Username *
              <input type='text'/>
            </label>
            <label for=''>
              Password *
              <input type='password'/>
            </label>
          </div>
          <div className='form-warning'>
            <p>Invalid Password! Must be 6 characters or more</p>
          </div>
          <div className='zaza-form-button'>
            <button>SIGN UP</button>
          </div>
        </form>
      </div>
      <div className='outside-content'>
        <div className='registered-question signup-question'>
          <p>Aready registered? <Link to='/login'><span>Switch to Log In</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp