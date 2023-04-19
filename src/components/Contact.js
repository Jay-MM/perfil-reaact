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
  const [successMessage, setSuccessMessage] = useState('');
  const { name, email, message } = formState;

  const validateForm = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid e-mail address.');
      return false;
    } else if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return false;
    } else if (!message.trim()) {
      setErrorMessage('Please enter a message.');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send email using emailjs
      emailjs.sendForm('service_59etvut', 'template_u5z28mm', form.current, '_qKABilleqanHvmW2')
      .then((result) => {
        console.log('E-mail successfully sent!');
        setSuccessMessage('E-mail successfully sent!😀');
        setTimeout(() => {
          setSuccessMessage('');
        }, 1500);
      }, (error) => {
        console.log('Error sending e-mail: ', error);
        setErrorMessage('Mhmm.. There was an error sending your e-mail😢 Please try again later.');
        setTimeout(() => {
          setErrorMessage('');
        }, 6000);
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
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form 
        className='container-fluid'
        ref={form}
        onSubmit={handleSubmit}
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: 33
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
            type="text" 
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