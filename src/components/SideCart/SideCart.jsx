import React from "react";
import DisplaySideCart from "../displaySidecart/DisplaySideCart";
import "./SideCart.css";

const SideCart = (props) => {
//   console.log(props);
  return (
    <div className="bg-black text-white p-4 h-50 position-fixed w-100">
      <div className="">
        <h4>add cart details</h4>
        {
            props.sideCart.map((title , index) => <DisplaySideCart title={title} key = {index}></DisplaySideCart>)
        }
      </div>
    </div>
  );
};

export default SideCart;
