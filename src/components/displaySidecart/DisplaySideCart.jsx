import React from 'react';
import './DisplaySideCart.css'

const DisplaySideCart = (props) => {
    // console.log(props.title.strMeal)
    return (
        <div>
            <p>{props.title.strMeal}</p>
        </div>
    );
};

export default DisplaySideCart;