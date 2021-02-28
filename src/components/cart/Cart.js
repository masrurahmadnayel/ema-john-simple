import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log("am i clicked",cart);
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    // let total = 0;
    // for(let i = 0; i < cart.length; i++){
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)

    return (
        <div>
            <h3>Order summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping charge: {shipping}</small></p>
            <p><small>Tax: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;