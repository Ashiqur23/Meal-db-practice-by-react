import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleCart from "../singleCart/SingleCart";
import "./Header.css";

const Header = () => {
  const [carts, setCarts] = useState([]);
  const [sideCart, setSideCart] = useState([]);
  // fetch data
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setCarts(data.meals));
  }, []);
  //   handle button cart
  const handleAddToCart = (product) => {
    // console.log(product)
    const pd = sideCart.find(pd => pd.idMeal === product.idMeal)
    if(pd){
        return alert('added this meal')
    }
    setSideCart([...sideCart, product]);
    // console.log(title)
  };
  return (
    <div className="row row-cols-2">
      <div className="col-8">
        <div className="row row-cols-2">
          {carts.map((cart) => (
            <SingleCart
              cart={cart}
              key={cart.idMeal}
              handleAddToCart={handleAddToCart}
            ></SingleCart>
          ))}
        </div>
      </div>
      <div className="col-4">
        <SideCart sideCart={sideCart} ></SideCart>
      </div>
    </div>
  );
};
export default Header;
