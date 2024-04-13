import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const LoginForm = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="box">
      <div className="signin"><h5>SIGN IN</h5></div>
      <div className="img">
        <i className='fa fa-user-circle' style={{ fontSize: '150px', color: 'lightgray' }}></i>
      </div>
      <Form onSubmit={handleSubmit} className="userlogin">
        <div className="textbox">
          <Form.Control
            className='text'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="textbox">
          <Form.Control
            className='text3'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text1">
          <input type="checkbox" style={{ backgroundColor: '#178275' }} />&nbsp;Remember me 
          <div className="text2">Forgot your password?</div>
        </div>
        <Button className="btn" variant="primary" type="submit">
          Login
        </Button>
        <Button className="btn" variant="secondary" onClick={handleSignUpClick}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
