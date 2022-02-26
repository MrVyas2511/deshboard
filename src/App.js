import './App.css';
import Sidebar from './Components/sidebar/Sidebar.js';
import Dashboard from './pages/dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/dashboard/About";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Sidebar />
          <div className="dashboard_wrapper">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
