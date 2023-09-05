import React, { useState } from 'react';
import './Signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to send the registration data to your backend for processing
    console.log('Form data submitted:', formData);
    // You should make an API request to your backend here
  };

  return (
    <div className="container" >
    <img alt='naveenpic' src='https://i.insider.com/5e83756d487c225d3b6e1c86?width=1000&format=jpeg&auto=webp' id='img'></img>
      <form onSubmit={handleSubmit} id='form'>
        <h2 id='signuppage1'>Sign Up:</h2>
        <div className="input-group">
          <label htmlFor="fullName" id='signuppage'>Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email" id='signuppage'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" id='signuppage'>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword" id='signuppage'>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <button type="submit" className="btn" id='signupgae'>Sign Up</button>
        </div>
        <p id='signuppage'>Already have an account? <a href="/Login" id='log'>Log In</a></p>
      </form>
    </div>
  );
}

export default SignUp;
