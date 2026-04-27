import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdCelebration } from "react-icons/md";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/auth/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setUser(response.data.user);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 shadow-md rounded-md text-center">
        <h1 className="text-3xl font-bold mb-4">
          <div className='flex items-center gap-2'>
            Welcome to your Dashboard <MdCelebration className='text-blue-600'/>
          </div>
        </h1>

        {user && (
          <div className="text-lg">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;