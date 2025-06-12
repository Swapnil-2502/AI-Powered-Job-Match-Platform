import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';


const SignupPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://43.204.235.128:3001/api/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/home'); 
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
               AI-Powered Job Match Platform
            </h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-80 space-y-4">
                <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
                <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={handleChange}
                required
                />
                <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={handleChange}
                required
                />
                <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
                value={formData.password}
                onChange={handleChange}
                required
                />
                <button type="submit" className="w-full bg-amber-400 text-white p-2 rounded hover:bg-amber-500">
                Sign Up
                </button>
                <p>Already have an account! <Link to='/login' className="text-blue-600">Login</Link> </p>
            </form>
        </div>
    )
}

export default SignupPage