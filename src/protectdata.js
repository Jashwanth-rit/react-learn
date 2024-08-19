
import React,{useEffect} from 'react';
import { Outlet,Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
function Protect(Props){
    const {Component} =Props;
    const navi = useNavigate();
     useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navi("/login")
        }
    })

    return (
        <div>
            <h1>welcomme </h1>
            <Component />
           
            
        </div>
    )
}
export default Protect;