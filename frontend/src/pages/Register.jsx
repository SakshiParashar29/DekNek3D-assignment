import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/auth/signup`,
                formData
            );
            console.log(response);
            localStorage.setItem('token', response.data.token); 
            navigate('/dashboard'); 
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex justify-center items-center flex-col rounded-md shadow-md p-12'>
                <h2 className='mb-2 text-2xl font-bold'>Sign Up</h2>

                {error && <p className='text-red-500 mb-2'>{error}</p>}

                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="username" className='font-semibold text-xl'>Username</label>
                        <input
                            className='border-gray-400 rounded-md shadow-md p-2 mb-2'
                            type="text"
                            name="username"
                            id="username"
                            placeholder='Enter your username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-semibold text-xl'>Email</label>
                        <input
                            className='border-gray-400 rounded-md shadow-md p-2 mb-2'
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter your email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='font-semibold text-xl'>Password</label>
                        <input
                            className='border-gray-400 rounded-md shadow-md p-2 mb-2'
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Enter your password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-md shadow-md' disabled={loading}>
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>

                    <p>Already have an account? <Link to="/Login" className='text-blue-600'>Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;