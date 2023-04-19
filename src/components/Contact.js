import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = (props) => {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      // Send email using emailjs
      emailjs.sendForm('service_59etvut', 'template_u5z28mm', form.current, '_qKABilleqanHvmW2')
      .then((result) => {
        console.log('Email successfully sent!');
      }, (error) => {
        console.log('Error sending email: ', error);
      });
      // Reset form
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }
  };


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Please enter a valid e-mail address.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} must be entered.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div 
      className='container-fluid'
      style={{
          display: 'flex',
          flexDirection: 'column'
      }}>
      <h1>Let's connect! 
        <br/>
        <br/>
        <span 
          style={{ 
            fontSize: 20 
            }}>
          Fill out this form with your name, e-mail, and a message describing why you'd like to get in touch. 
          <br/>
          I'll respond as soon as possible.
        </span>
        </h1>
      <form 
        className='container-fluid'
        ref={form}
        onSubmit={handleSubmit}
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: 33,
            marginBottom: '3rem'
        }}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input 
            type="email" 
            name="email" 
            value={email} 
            placeholder="name@example.com"
            onChange={handleChange} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
            }}
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="message">Message: </label>
          <textarea 
            name="message"
            rows="7"
            value={message}
            onChange={handleChange}
            style={{
              width: '100%'
            }}
          />  
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit: </button>
      </form>
    </div>
  );
};

export default Contact;