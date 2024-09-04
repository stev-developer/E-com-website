import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Candles from './components/FAVORITES/TopProducts';
import NavBar from './components/Navbar/NavBar';
import MostPopular from './components/ProductCarosuel/MostPopular';
import Footer from './components/Footer/Footer';
import Dashboard from './components/DashBoard/Dashboard';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      {/* Conditionally render NavBar if not on /dashboard route */}
      {location.pathname !== '/dashboard' && <NavBar toggleCart={toggleCart} />}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Candles />
              <MostPopular />
              <Footer />
            </>
          } 
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
