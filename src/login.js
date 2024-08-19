import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Logi(){
    const login=()=>{
        localStorage.setItem('login',true)
    }

    const [id,setid] = useState("");
    const [pass,setpass] = useState("");
const [iderr,setiderr] = useState("");
const [passerr,setpasserr] = useState("");
const navi = useNavigate();
     useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login){
            navi("/")
        }
    }
)

function loginhandlesubmit(e){
    if(id.length<3 || pass.length<3){
        alert("type crt values");
    }
    else{
        alert("all good");
    }


    e.preventDefault();
}

function idhand(e){

     var item = e.target.value;
    if(item.length<3){
        setiderr(true);

    }
    else{
        setiderr(false);


    }
setid(item);


}



function passhand(e){

   var item = e.target.value;
    if(item.length<3){
        setpasserr(true);

    }
    else{
        setpasserr(false);


    }
setpass(item);


}



    return (
        <div className="App">
            <h1>Login page</h1>
    
     <form onSubmit = {loginhandlesubmit}>
       <input type = "text" placeholder="enter name" onChange = {idhand}/>{iderr?<span>not valid</span>:""}<br></br>
       
       <input type = "text" placeholder="enter pass" onChange = {passhand}/>{passerr?<span>not valid</span>:""}<br></br>
       
       

       
       
 <button onClick={login} >submit</button>
 
     </form>






     </div>

    )
}
export default Logi;