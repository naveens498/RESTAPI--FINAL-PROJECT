import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // You would typically perform authentication logic here
    console.log('Login clicked:', username, password);
  };

  return (
    <div className="login-container">
      <h1 id='name'>LOGIN</h1>
      <h2 id='online'>Online Ticket Booking System</h2>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="username" id='user'>UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <label htmlFor="password" id='user'>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

       
        <a href='/SIGNUP' id='signup'>Sign up</a>
        <a href='./Home' id='sign'> Submit</a>
      </form>
    </div>
  );
}

export default Login;
