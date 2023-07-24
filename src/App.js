import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import TestimonialsPage from "./pages/TestimonialsPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
