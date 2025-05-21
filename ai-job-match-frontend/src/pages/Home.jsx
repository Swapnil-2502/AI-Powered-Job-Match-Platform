import LogoutButton from '../components/LogoutButton'
import { jwtDecode } from 'jwt-decode';

const Home = () => {
  const token = localStorage.getItem('token')
  const decoded = token ? jwtDecode(token): null;
  return (
    <div>
        <div className="min-h-screen p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Welcome to the AI Job Match Platform</h1>
            <LogoutButton />
          </div>
          <h3 className='font-bold'>Welcome! {decoded?.name || 'User'}</h3>
      </div>
    </div>
  )
}

export default Home