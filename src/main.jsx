import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";

import Home from "./pages/Home";
import AirPollution from "./pages/AirPollution";
import WaterPollution from "./pages/WaterPollution";
import SoilPollution from "./pages/SoilPollution";
import ForestRestoration from "./pages/ForestRestoration";
import MarineEcosystem from "./pages/MarineEcosystem";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/air" element={<AirPollution />} />
        <Route path="/water" element={<WaterPollution />} />
        <Route path="/soil" element={<SoilPollution />} />
        <Route path="/forest" element={<ForestRestoration />} />
        <Route path="/marine" element={<MarineEcosystem />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
