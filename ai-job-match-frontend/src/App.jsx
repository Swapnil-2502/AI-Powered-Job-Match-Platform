//import './App.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProfilePage from "./pages/ProfilePage";
import JobListings from "./pages/JobListings";


function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={
            <ProtectedRoutes >
              <Home />
            </ProtectedRoutes>
            } />
          <Route path="/profile" element={
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
            } />
          <Route path="/jobs" element={
            <ProtectedRoutes>
              <JobListings />
            </ProtectedRoutes>
            } />
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
