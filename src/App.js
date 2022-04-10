import './App.css';
import Sidebar from './Components/sidebar/Sidebar.js';
import Dashboard from './pages/dashboard/Dashboard';
import About from "./pages/dashboard/About";
import ActivityPoint from './pages/dashboard/ActivityPoint';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Sidebar />
          <div className="content_section">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/activitypoint" element={<ActivityPoint />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
