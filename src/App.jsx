// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Air from "./pages/Air";
import Water from "./pages/Water";
import Soil from "./pages/Soil";
import Forest from "./pages/Forest";
import Marine from "./pages/Marine";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/air" element={<Air />} />
        <Route path="/water" element={<Water />} />
        <Route path="/soil" element={<Soil />} />
        <Route path="/forest" element={<Forest />} />
        <Route path="/marine" element={<Marine />} />
      </Routes>
    </Router>
  );
}

export default App;
