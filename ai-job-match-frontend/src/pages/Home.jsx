import { jwtDecode } from 'jwt-decode';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';

const Home = () => {
  const token = localStorage.getItem('token')
  const decoded = token ? jwtDecode(token): null;
  
  return (
    <div>
        <Navbar />
        <div className="min-h-screen p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Welcome to the AI Job Match Platform</h1>
          </div>
          <h3 className='font-bold'>Welcome! {decoded?.name || 'User'}</h3>
          
          <ProfileCard />
        </div>
    </div>
  )
}

export default Home