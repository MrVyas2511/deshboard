import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar.js";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/dashboard/About";
import ActivityPoints from "./pages/dashboard/activitypoint";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Sidebar />
          <div className="content_section">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/activitypoints" element={<ActivityPoints />} />
              <Route path="/about" element={<About />} />
              <Route path="/scholarship" element={<Scholarship />} />
              <Route path="/payments" element={<Payments />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
