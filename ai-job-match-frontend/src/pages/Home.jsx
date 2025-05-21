import LogoutButton from '../components/LogoutButton'
import { jwtDecode } from 'jwt-decode';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const token = localStorage.getItem('token')
  const decoded = token ? jwtDecode(token): null;
  
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try{
        const res = await axios.get("http://localhost:3001/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
      }
      catch(error){
        console.error("Failed to fetch profile:", error);
      }
      finally{
        setLoading(false)
      }
    }
    if (token) {
      fetchProfile();
    }
  },[token])

  return (
    <div>
        <Navbar />
        <div className="min-h-screen p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Welcome to the AI Job Match Platform</h1>
          </div>
          <h3 className='font-bold'>Welcome! {decoded?.name || 'User'}</h3>
          <div>
            {loading ? (
              <p>Loading Profile... </p>
            ): profile ? (
              <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-2">Your Profile:</h2>
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Location:</strong> {profile.location}</p>
                <p><strong>Experience:</strong> {profile.experience} years</p>
                <p><strong>Preferred Job Type:</strong> {profile.jobType}</p>
                <p><strong>Skills:</strong> {profile.skills.join(', ')}</p>
              </div>
            ):(
              <p>No profile found. Please create one.</p>
            )}
          </div>
        </div>
    </div>
  )
}

export default Home