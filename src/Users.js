//functional components
import React,{Component, comp} from 'react'
import {Link,NavLink,Outlet} from 'react-router-dom';
export function User()
{
    return (
        <div>
            <h1>hello everybody</h1>
    <ul className = "navbar">
            <li> <NavLink 
            style={({isActive})=>{return {color: isActive ? 'red' : "black"}}}
            className = "navbar-link" to = '/contact'>contact</NavLink></li>
             <li> <NavLink 
            style={({isActive})=>{return {color: isActive ? 'red' : "black"}}}
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
            <Outlet></Outlet>
           </ul>

</div>
)
}
export default User;

//class components

// import React,{Component, comp} from 'react'
// export default class User extends Component{
//     render()
//     {
//         return (
//             <h1>hello everybody</h1>

//         )
//     }
// }
