import "./style/general.css"
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from 'aos';
import { useEffect } from 'react';

import NavigationBar from "./components/navbar"
import Footer from "./components/footer"

import Home from "./pages/home"
import Contact from "./pages/contact"

export default function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}