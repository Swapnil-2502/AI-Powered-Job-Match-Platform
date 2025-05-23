import { jwtDecode } from 'jwt-decode';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const token = localStorage.getItem('token')
  const decoded = token ? jwtDecode(token): null;

  const [recommendations, setRecommendations] = useState('')
  const [loading, setLoading] = useState('false')

  const handleFindMatches = async () => {
    setLoading(true)

      try{
          const token = localStorage.getItem('token')
          const response = await axios.post("http://43.204.235.128:3001/api/ai/recommend",{},
            {
              headers:{
                Authorization : `Bearer ${token}`
              },
            }
          )

          setRecommendations(response.data.recommendations)
      }
      catch(error){
        console.error('Error fetching recommendations:', error);
        setRecommendations('Something went wrong. Try again later.');
      }
      finally{
        setLoading(false)
      }
  }
  
  return (
    <div>
        <Navbar />
        <div className="min-h-screen p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Welcome to the AI Job Match Platform</h1>
          </div>
          <h3 className='font-bold mb-6'>Welcome! {decoded?.name || 'User'}</h3>
          
          <ProfileCard />

          <button
            onClick={handleFindMatches}
            className="bg-blue-600 text-white px-4 py-2 mt-6 rounded hover:bg-blue-700 transition mb-6"
          >
            {loading ? 'Finding matches...' : 'Find My Matches'}
          </button>

          {recommendations && (
            <div className="bg-white p-4 rounded shadow-md whitespace-pre-line">
              <h2 className="text-xl font-semibold mb-2">Top AI Recommendations:</h2>
              <p>{recommendations}</p>
            </div>
          )}

        </div>
    </div>
  )
}

export default Home