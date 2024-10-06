import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { } from '../App.css';

const Cart = (props) => {
    console.warn('cart :', props.data);

    const navigate = useNavigate();

    const gotohome = () => {
        navigate('/');
    }

    // Initialize state with props.data
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Extract carddata from each item in props.data
        const items = props.data.map(item => item.carddata);
        setCartItems(items); // Set the cart items when props.data changes
    }, [props.data]);

    return (
        <div className="megacontainer">
            <div className="header">
                <h1>Cart</h1>
                <div className="cartdiv">
                    <button className='homebut' onClick={gotohome}>Home</button>
                </div>
            </div>
            <div className="cproducts">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div className="cproduct" key={index}>
                            <div className="cimgdiv">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cinfodiv">
                                <span>{item.name}</span>
                                <span>Price: ${item.price}</span>
                            </div>
                            <button onClick={() => props.removefromcart()}>Remove</button>
                        </div>
                    ))
                ) : (
                    <h2>Your cart is empty</h2>
                )}
            </div>
        </div>
    );
}

export default Cart;
