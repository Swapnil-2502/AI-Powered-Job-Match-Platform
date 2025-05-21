import { isAuthenticated } from "../utils/auth"
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
  
    if(!isAuthenticated()){
        return <Navigate to='/login' />
    }
  
    return children
}

export default ProtectedRoutes