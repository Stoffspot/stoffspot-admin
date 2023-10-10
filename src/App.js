import "./App.css";
import Sidenav from "./Layout/Sidenav";
import React from 'react'
import DashboardStructure from './Components/Card_structure_dashboard';
import ProductStructure from './Components/Card_structure_product';
import Categorylist from './Components/Card_structure_category';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App bg-[#f4f5fa] min-h-0 md:min-h-screen grid grid-cols-1 md:grid-cols-6">
        <div className="m-0 p-0  shadow-xl">
          <Sidenav />
        </div>
        <div className="col-span-5 p-0 md:p-2 relative pt-[2rem] md:pt-[5rem]">
          
            <Routes>
              <Route path="/" element={<DashboardStructure />} />
              <Route path="/product" element={<ProductStructure />} />
              <Route path="/category" element={<Categorylist />} />
            </Routes>
          </div>
      
      </div>
    </Router>
  );
}

export default App;
