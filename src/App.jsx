import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Make sure these are imported
import { BackgroundGradientAnimation } from "./components/ui/background";
import Home from "./components/Home";
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <BackgroundGradientAnimation>
        <div className="absolute inset-0 z-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BackgroundGradientAnimation>
    </Router>
  );
}

export default App;