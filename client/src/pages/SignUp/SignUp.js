import React, { useState } from 'react'
import './signup.css'
import '../Login/login.css'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

const SignUp = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='login-signup signup-section'>
      <div className='card signup-card'>
        <h3>Create an Account</h3>
        <form className='zaza-form signup-form' onSubmit={handleFormSubmit}>
          <div className='zaza-input'>
            <label for=''>
              First Name *
              <input type='text' onChange={handleChange}/>
            </label>
            <label for=''>
              Last Name *
              <input type='text' onChange={handleChange}/>
            </label>
            <label for=''>
              Email Address *
              <input type='email' onChange={handleChange}/>
            </label>
            <label for=''>
              Username *
              <input type='text' onChange={handleChange}/>
            </label>
            <label for=''>
              Password *
              <input type='password' onChange={handleChange}/>
            </label>
          </div>
          <div className='form-warning'>
            <p>Invalid Password! Must be 6 characters or more</p>
          </div>
          <div className='zaza-form-button'>
            <button type="submit">SIGN UP</button>
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