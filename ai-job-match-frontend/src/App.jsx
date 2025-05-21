//import './App.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./components/ProtectedRoutes";


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
        </Routes>
      </BrowserRouter>
    );
  
}

export default App
