/** @format */

import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateTool from "./pages/CreateTool";
import AuthenticatedGallery from "./pages/AuthenticatedGallery";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            isAuthenticated ? (
              <Navigate
                to='/AuthenticatedGallery'
                replace
              />
            ) : (
              <LandingPage />
            )
          }
        />

        <Route
          path='/AuthenticatedGallery'
          element={
            isAuthenticated ? (
              <AuthenticatedGallery />
            ) : (
              <Navigate
                to='/'
                replace
              />
            )
          }
        />
        <Route
          path='/create-tool'
          element={<CreateTool />}
        />
      </Routes>
    </Router>
  );
}

export default App;
