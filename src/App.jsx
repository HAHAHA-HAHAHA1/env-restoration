import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Air from "./pages/AirPollution";
import Water from "./pages/WaterPollution";
import Soil from "./pages/SoilPollution";
import Forest from "./pages/ForestRestoration";
import Marine from "./pages/MarineEcosystem";

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
