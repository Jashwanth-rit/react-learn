import React, { useState } from 'react';
import { } from '../App.css';
import App from '../App';
import Cart from './cart';
import { BrowserRouter as Router, Route, Switch, Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
    console.warn("This is the home page");
    console.warn("home_props", props.data.length);
    
    const navigate = useNavigate();

    const gotocart = () => {
        navigate('/cart');
    }

    // Sample product data
    const [products] = useState([
        {
            id: 1,
            name: 'Watch',
            price: Math.floor(Math.random() * 500) + 50, // Random price between $50 and $550
            image: 'https://imgs.search.brave.com/PSAFrI1h0PDfgPLG3IIzAqotU6DEFPRbBVtRAWN9H54/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/MzgwMTQ2L3Bob3Rv/L2dvbGQtd2F0Y2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PS1kN2xENzNqcnhD/MV9BWWhSbnk4SGZ4/R0podjdpRmZlbzZN/ZXZWdFY0d0k9'
        },
        {
            id: 2,
            name: 'Watch',
            price: Math.floor(Math.random() * 500) + 50, // Random price between $50 and $550
            image: 'https://imgs.search.brave.com/c0BLNrGC834vRNOOYxm3Sy0UUU_uJtUemFoRcVyMryc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/NTEwNjY2MC9waG90/by9tZW5zLXdhdGNo/LWFuZC1oYW5kLWlu/LXBvY2tldC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VWl3/LVFaNnRjUXY2Yldn/Q3Bwc2xSZjdRejA1/RXFhS0IzTkR6M2ZP/cWZaYz0'
        },
        {
            id: 3,
            name: 'Watch',
            price: Math.floor(Math.random() * 500) + 50, // Random price between $50 and $550
            image: 'https://imgs.search.brave.com/SolZiotHMc51H1ZPmAvJI2zGKX1obOXWlPL0jtUMIKc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzg2Lzg1Lzcx/LzM2MF9GXzE4Njg1/NzE5MF9zNGRmYzB3/ZlQ2amNFY3I3ZTN2/enJGdVVkeXNnNkdw/cC5qcGc'
        },
        {
            id: 4,
            name: 'Watch',
            price: Math.floor(Math.random() * 500) + 50, // Random price between $50 and $550
            image: 'https://imgs.search.brave.com/SolZiotHMc51H1ZPmAvJI2zGKX1obOXWlPL0jtUMIKc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzg2Lzg1Lzcx/LzM2MF9GXzE4Njg1/NzE5MF9zNGRmYzB3/ZlQ2amNFY3I3ZTN2/enJGdVVkeXNnNkdw/cC5qcGc'
        }
    ]);

    return (
        <div className="megacontainer">
            <div className="header">
                <h1>Shop now!!</h1>
                <div className="cartdiv" onClick={gotocart}>
                    <span className="cart-count">{props.data.length}</span>
                    <img src="https://imgs.search.brave.com/ovL_UV-ob1yNKdZOanhIg9ioZ5G61E3H-3IGyZBUcuc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGlwc2FuZHRyaWNr/cy1ocS5jb20vZWNv/bW1lcmNlL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzA5L2Fk/ZC10by1jYXJ0LWJ1/dHRvbi10dXRvcmlh/bC0xLTEyOC5wbmc" alt="Cart" />
                </div>
            </div>
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="imgdiv">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="infodiv">
                            <span>{product.name}</span>
                            <span>Price: ${product.price}</span>
                            <button onClick={() => props.addtocart({
                                id: product.id, 
                                price: product.price, 
                                name: product.name,
                                image: product.image 
                            })}>Add</button>
                            <button onClick={() => props.removefromcart({
                                id: product.id
                            })}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;