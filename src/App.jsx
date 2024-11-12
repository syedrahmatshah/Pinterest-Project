/** @format */

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateTool from "./pages/CreateTool";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
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
