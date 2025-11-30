import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CoffeeMenu from "./Pages/CoffeeMenu";
import DessertMenu from "./Pages/DessertMenu";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";

import { useState } from "react";
import "./global.css";

function App() {

  const [orders, setOrders] = useState([]);

  const addOrder = (item) => {
    setOrders(prev => [...prev, item]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route 
          path="/menu" 
          element={<CoffeeMenu addOrder={addOrder} />} 
        />

        <Route 
          path="/dessert" 
          element={<DessertMenu addOrder={addOrder} />} 
        />

        <Route path="/about" element={<About />} />

        <Route 
          path="/contact" 
          element={<ContactUs orders={orders} />} 
        />

      </Routes>
    </Router>
  );
}

export default App;