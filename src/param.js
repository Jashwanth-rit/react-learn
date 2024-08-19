import React from 'react'
import { useParams, useSearchParams } from "react-router-dom"


function Param()
{
const [useparamval,setparam] = useSearchParams(); //?age=20&city=bengaluru
console.warn(useparamval.get('age'))
    const para = useParams();
    const {name} = para
    let age = useparamval.get('age')
    let city = useparamval.get('city')
    
    
    return (
        <div>
            <h1>this is params</h1>
            <h1>this is {name} page</h1>
            <h1>age is {age} </h1>
            <h1>city is {city} </h1>
            <input type ="text" onChange = {(e)=>setparam({age:e.target.value})}/>
            <input type ="text" onChange = {(e)=>setparam({city:e.target.value})}/> 
            <button onClick={(e)=>e.preventDefault()}>update</button>
             
        </div>
    )
}

export default Param;