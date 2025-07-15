import axios from '../api/axios';
import { useEffect, useState } from 'react';

const ProfileCard = ({refresh}) => {
    const token = localStorage.getItem('token')

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

   
    const fetchProfile = async () => {
      try{
        const res = await axios.get("/profile", {
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
    
    useEffect(()=>{
      fetchProfile()
    },[refresh])
  
    return (
        <>
            <div>
            {loading ? (
              <p>Loading Profile... </p>
            ): profile ? (
              <div className="bg-gray-300 p-4 rounded shadow-md">
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
        </>
  )
}

export default ProfileCard