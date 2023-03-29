import React from "react";
import "./SingleCart";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const SingleCart = (props) => {
//   console.log(props.handleAddToCart);
  const { strArea, strInstructions, strMeal, strMealThumb, strYoutube} =
    props.cart;
    const {handleAddToCart} =props
  return (
    <div className="">
      <div className="cols my-2">
        <div className="card">
          <img src={strMealThumb} className="w-25" alt="" />
          <h3>{strMeal}</h3>
          <h6>{strArea}</h6>
          <p>{strInstructions.slice(0,200)}</p>
          <a className="my-2" href={strYoutube}>Visit youtube link</a>
          <button onClick={() => handleAddToCart(props.cart)}>Add To Cart <FontAwesomeIcon icon={faCoffee}/></button>
        </div>
      </div>
    </div>
  );
};
export default SingleCart;