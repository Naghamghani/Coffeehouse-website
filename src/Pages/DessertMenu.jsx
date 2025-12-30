import React, { useState } from "react";
import "./DessertMenu.css";

import cake from "../assets/cake.jpg";
import donut from "../assets/donut.jpg";
import brownie from "../assets/brownie.jpg";
import lotuscake from "../assets/lotuscake.jpg";
import crepe from "../assets/crepe.jpg";
import tiramisu from "../assets/tiramisu.jpg";
import cinnamonrolls from "../assets/cinnamonrolls.jpg";
import cupcake from "../assets/cupcake.jpg";
import pannacota from "../assets/pannacota.jpg";
import lemontart from "../assets/lemontart.jpg";

const desserts = [
  { id: 1, name: "Chocolate Cake", price: 4, img: cake },
  { id: 2, name: "Donut", price: 3, img: donut },
  { id: 3, name: "Brownie", price: 2, img: brownie },
  { id: 4, name: "Lotus Cake", price: 4, img: lotuscake },
  { id: 5, name: "Crepe", price: 7, img: crepe },
  { id: 6, name: "Tiramisu", price: 3, img: tiramisu },
  { id: 7, name: "Cinnamon Rolls", price: 5, img: cinnamonrolls },
  { id: 8, name: "Cupcake", price: 2, img: cupcake },
  { id: 9, name: "Panna Cota", price: 6, img: pannacota },
  { id: 10, name: "Lemon Tart", price: 5, img: lemontart }
];

function DessertMenu({ addOrder }) {
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCart(prev => prev + 1);
    setTotal(prev => prev + item.price);
    addOrder({ name: item.name, price: item.price });
  };

  return (
    <div className="menu-container">
      <h1>Our Dessert Menu</h1>

      <div style={{ marginBottom: "20px", fontSize: "20px" }}>
        🛒 Items: {cart} | Total: ${total}
      </div>

      <div className="menu-grid">
        {desserts.map(item => (
          <div
            className="card"
            key={item.id}
            onClick={() => addToCart(item)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DessertMenu;