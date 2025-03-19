import React, { useState } from 'react';

const Cart = () => {

    const [cartItems, setCartItems] =useState ([
        {
            id: 1,
            name: " ",
            price: "£80",
            quantity: 10,
            image: "./images/Aduke.jpg"
        },
        {
            id: 2,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 3,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 4,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 5,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 6,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 7,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 8,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 9,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 10,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 11,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
        {
            id: 12,
            name: "",
            price: "",
            quantity: 10,
            image: ""
        },
    ]);

    //this is the function to add the quantity
    const updateQuantity = (id, amount) => {
        setCartItems((prevItems) =>
        prevItems.map((item) => item.id === id ? {
            ...item, quantity: Math.max(1, item.quantity + amount)
         } : item) 
        );
    };

        //This is the function to remove an item from the cart
    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    //calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


    return(
        <div className='cart-container'>
            <h2>Your Cart</h2>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <div key={item.id} className='cart-item'>
                        <img src={item.image} alt={item.name} className='item-image' />
                        <div className='item-details'>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <div className='quantity-controls'>
                                <button conClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                            <button className='remove-btn' onClick={() => removeItem(item.id)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='cart-summary'>
                <h3>Total: ${totalPrice}</h3>
                <button className='checkOut-btn'>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Cart 