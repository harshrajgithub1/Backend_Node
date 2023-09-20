

import React, { useState } from 'react';
import axios from 'axios';
import { APP_URL } from '../../Constants/constants';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj={
      name: formData.username,
      email : formData.email,
      password: formData.password,
    }
    // Simulate registration (replace with actual registration logic)
    if (formData.username && formData.email && formData.password) {
      axios.post(
        `${APP_URL}/users/create-user`,
        obj)
          .then(res => {
            if (res.status === 200)
            alert('Student successfully created')
            else
            Promise.reject()
          })
          .catch(err => alert('Something went wrong'))
      setRegistered(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  
  return (
    <div>
      {registered ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>You are now registered as {formData.username}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationPage;






