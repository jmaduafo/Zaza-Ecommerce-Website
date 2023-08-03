import React, { useState } from 'react'
import './signup.css'
import '../Login/login.css'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

const SignUp = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', username: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const [validation, setValidation] = useState(true)

  const [errorMessage, setErrorMessage] = useState('')

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (formState.password.length < 5) {
      setValidation(false);
      setErrorMessage('Invalid password! Password must be 5 characters or more');
    } else if (!regex.test(formState.email)) {
      setValidation(false)
      setErrorMessage('You have entered an invalid email address!');
    } else if (formState.username.length < 5) {
      setValidation(false)
      setErrorMessage('Invalid username! Username must be 5 characters or more');
    } else if (!formState.firstName.length || !formState.lastName.length || !formState.username.length ||
      !formState.email.length || !formState.password.length) {
      setValidation(false)
      setErrorMessage('All entries must be filled out!');
    } else {
      setValidation(true)
      const mutationResponse = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          username: formState.username,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    }
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
            <label htmlFor='first-name'>
              First Name *
              <input type='text' name='firstName' id='first-name' onChange={handleChange}/>
            </label>
            <label htmlFor='last-name'>
              Last Name *
              <input type='text' name='lastName' id='last-name' onChange={handleChange}/>
            </label>
            <label htmlFor='email'>
              Email Address *
              <input type='email' name='email' id='email' onChange={handleChange}/>
            </label>
            <label htmlFor='user-name'>
              Username *
              <input type='text' name='username' id='user-name' onChange={handleChange}/>
            </label>
            <label htmlFor='pwd'>
              Password *
              <input type='password' name='password' id='pwd' onChange={handleChange}/>
            </label>
          </div>
          <div>
            {error || validation === false ? <p className='error-text'>{errorMessage}</p> : <p></p>}
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