import React from 'react'

import {Link,NavLink} from 'react-router-dom';
function Nav(){
    return(
        <div>
           <ul className = "navbar">
           <li> <NavLink 
            style={({isActive})=>{return {color: isActive ? 'red' : "black"}}}
            className = "navbar-link" to = '/login'>login</NavLink></li>
            <li> <NavLink 
            style={({isActive})=>{return {color: isActive ? 'red' : "black"}}}
            className = "navbar-link" to = '/contact'>contact</NavLink></li>
             <li> <NavLink style={({isActive})=>{return {color: isActive ? 'red' : "black"}}}
            className = "navbar-link" to = '/company'>company</NavLink></li>
             <li> <NavLink 
            style={({isActive})=>{return {color: isActive ? 'red' : "black"}}}
            className = "navbar-link" to = '/accounts'>acounts</NavLink></li>
            <li> <NavLink
             
            style={({isActive})=>{return {color: isActive ? 'red' : "black"}}}className = "navbar-link" to = '/user/anil'>anil</NavLink></li>
            <li> <NavLink 
            style={({isActive})=>{return {color: isActive ? 'red' : "black"}}}className = "navbar-link" to = '/user/peter'>peter</NavLink></li>
            <li> <NavLink 
            style={({isActive})=>{return {color: isActive ? 'red' : "black"}}}className = "navbar-link" to = '/about'>about</NavLink></li>
         
          
            <li><NavLink to = '/'>Home</NavLink></li>
           </ul>
        </div>
    )
}
export default Nav;