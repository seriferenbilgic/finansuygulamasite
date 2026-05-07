import "./style/general.css"
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from 'aos';
import { useEffect, useState } from 'react';

import NavigationBar from "./components/navbar"
import Footer from "./components/footer"

import Home from "./pages/home"
import Contact from "./pages/contact"
import Login from "./pages/login"

export default function App() {
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleRegister = (accountData) => setAccount(accountData);
  const handleLogin = (credentials) => {
    if (!account) return false;
    if (account.email !== credentials.email || account.password !== credentials.password) return false;
    setUser({ name: account.name });
    return true;
  };
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <NavigationBar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={handleLogin} onRegister={handleRegister} account={account} />} />
      </Routes>
      <Footer />
    </Router>
  )
}