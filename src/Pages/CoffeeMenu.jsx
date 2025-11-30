import React, { useState } from "react";
import latte from "../assets/latte.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import espresso from "../assets/espresso.jpg";
import strawberry from "../assets/strawberry.jpg";
import mocha from "../assets/mocha.jpg";
import lotus from "../assets/lotus.jpg";
import oreomilkshake from "../assets/oreomilkshake.jpg";
import avocado from "../assets/avocado.jpg";
import caramel from "../assets/caramel.jpg";
import hotchoclate from "../assets/hotchoclate.jpg";

const items = [
  { id: 1, name: "Espresso", price: 4, img: espresso },
  { id: 2, name: "Cappuccino", price: 5, img: cappuccino },
  { id: 3, name: "Latte", price: 6, img: latte },
  { id: 4, name: "Mocha", price: 4, img: mocha },
  { id: 5, name: "Strawberry Milkshake", price: 4, img: strawberry },
  { id: 6, name: "Hot Chocolate", price: 6, img: hotchoclate },
  { id: 7, name: "Lotus Milkshake", price: 6, img: lotus },
  { id: 8, name: "Oreo Milkshake", price: 5, img: oreomilkshake },
  { id: 9, name: "Avocado Cocktail", price: 6, img: avocado },
  { id: 10, name: "Caramel Frappe", price: 6, img: caramel }
];

function CoffeeMenu({ addOrder }) {
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCart(prev => prev + 1);
    setTotal(prev => prev + item.price);
    addOrder({ name: item.name, price: item.price });
  };

  return (
    <div className="menu-container">
      <h1>Our Coffee Menu</h1>

      <div style={{ marginBottom: "20px", fontSize: "20px" }}>
        🛒 Items: {cart} | Total: ${total}
      </div>

      <div className="menu-grid">
        {items.map(item => (
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

export default CoffeeMenu;