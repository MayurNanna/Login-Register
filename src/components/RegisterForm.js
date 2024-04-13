import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const RegisterForm = ({ setUser }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { name, dob, email, password });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.log('Registration failed', error);
    }
  };

  return (
    <div className="box">
      <div className="signin"><h5>REGISTER</h5></div>
      <div className="img">
        <i className='fa fa-user-circle' style={{ fontSize: '150px', color: 'lightgray' }}></i>
      </div>
      <Form onSubmit={handleSubmit} className="userlogin">
        <div className="textbox">
          <Form.Control
            className='text'
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="textbox">
          <Form.Control
            className='text4'
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="textbox">
          <Form.Control
            className='text5'
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
        <Button className="btn" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
