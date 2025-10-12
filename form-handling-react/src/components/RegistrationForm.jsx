import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitting Data:", formData);
      // Simulate API call
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label><br/>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label><br/>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label><br/>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
