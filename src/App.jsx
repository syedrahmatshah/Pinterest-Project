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
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { isLogin } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            isLogin ? (
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
            isLogin ? (
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
