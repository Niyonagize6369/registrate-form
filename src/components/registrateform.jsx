import React, { useState } from 'react';

const RegistrateForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

} 
 const [errors, setErrors] = useState({});


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};


const validateForm = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = 'Name is required';
  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email address is invalid';
  }
  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    console.log('Form submitted successfully', formData);
    
    setFormData({ name: '', email: '', password: '' });
  }
};

return (
  <div className="registrate-form">
    <h2>Registrate Form</h2>
    <form onSubmit={handleSubmit}>
      
    
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

     
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      
      <button type="submit">Register</button>
    </form>
  </div>
);


export default RegistrateForm;