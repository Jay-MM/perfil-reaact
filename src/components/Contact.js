import { useState } from 'react'
import { validateEmail } from '../utils/helpers';
const Contact = (props) => {
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
          console.log('Form has been submitted!', formState);
        }
        setFormState('')
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

        }}>
        <h1>Fill out this form wih your name, e-mail and a quick message</h1>
        <form 
        className='container-fluid'
        onSubmit={handleSubmit}
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}
          />
        </div>
        <div class="form-group">
          <label htmlFor="email">Email: </label>
          <input 
          type="email" 
          name="email" 
          defaultValue={email} 
          placeholder="name@example.com"
          onBlur={handleChange} 
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}
        />
        </div>
       
        <div class="form-group">
          <label htmlFor="message">Message: </label>
          <textarea 
          name="message"
          rows="7"
          defaultValue={message}
          onBlur={handleChange}
          style={{
            width: '100%'
        }}
          >  
          </textarea>
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
}
export default Contact