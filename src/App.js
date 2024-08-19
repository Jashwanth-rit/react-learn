
// import {createRef, useState} from 'react'
// import logo from './logo.svg';
// import './App.css';
// import React,{Component} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Table} from 'react-bootstrap';

// import User from './Users'
// import Props from './props'
// import Logi from './login'
// import Frref from './farwrdref.js'
// import {useRef} from 'react'
// import { BrowserRouter } from 'react-router-dom';



// code to use function component and use state and bottun
// function App() {
  // const [data,setData] = useState('jk')
  //  function updateData()
  // {
  //   // var name = alert(prompt("enter name u wish"))

  //    setData(prompt("enter name u wish"))
  //  }
//   //console.warn(alert(prompt("enter name u wish")));
//   return (
//     <div className="App">
//       <h1>hello {data}</h1>
//       <button onClick = {updateData}>add name</button>
    
//     </div>
//   );
// }

//program to get input box value and print on screen if any changes

// function App(){
//   const [data,setData] = useState('jk')
//const [print,setData] = useState('jk')
//    function updateData(val)
//   {
//     // var name = alert(prompt("enter name u wish"))

//      setData(val.target.value)
//    }
// function setprint()
// {
//   print=true

//}
//   return (
//      <div className="App">
// {
//   print?
//   <h1>{data}</h1>
//   :null

// }

//       <h3>click on print data to set this {data}</h3>
//       <input type="text" onChange={updateData}/>
//<button onClick= {setprint}>print data</button>
//     </div>
//    )
// }


//program props using and passing arguments and use them on screen

// function App(){
//   function betunned(){
//     alert("welcome to home page ");
//   }
//   return (
//     <div className="App">
// <Props n = {"jk"} email="jk.karu.com"></Props>
// <Props n = {"pk"}  email="pk.karu.com"></Props>
// <Props n = {"ak"}  email="ak.karu.com"></Props>
// <div>
// <Props data = {betunned}/>
// </div>
//     </div>
//   );
// }


//program to create form and add state and get the data in console screen
// function App(){

//   const [name,setname] = useState("");
//   const [sel,setsel] = useState("");
//   const [condi,setcondi] = useState(false);
//   function getdata(e){

//     console.warn(name,sel,condi)
//     e.preventDefault()
//   }

//   function setName(e){
//    setname(e.target.value);
//   }
//   function setSel(e){
//     setsel(e.target.value);
//   }
//   function setCondi(e){
//     setcondi(e.target.checked);
//   }

  
//   return (
//     <div className="App">
//     <h1>fill the form</h1>
//     <form onSubmit = {getdata}>
//       <input type = "text" placeholder="enter name" onChange={setName}/><br></br>
//       <select onChange = {setSel}>
//         <option>select options</option>
//         <option>jay</option>
//         <option>keerthi</option>
//         <option>jay</option>
//       </select>
//       <br></br>
//       <input type = "checkbox"  onChange={setCondi}/><span>Accept the term and condition</span><br></br>
// <button type= 'submit'>submit</button>
//     </form>





//     </div>
//   )
// }

//or

// function App(){

//   const [name,setname] = useState("");
//   const [sel,setsel] = useState("");
//   const [condi,setcondi] = useState(false);
//   function getdata(e){

//     console.warn(name,sel,condi)
//     e.preventDefault()
//   }


  
//   return (
//     <div className="App">
//     <h1>fill the form</h1>
//     <form onSubmit = {getdata}>
//       <input type = "text" placeholder="enter name" onChange={(e)=>setname(e.target.value)}/><br></br>
//       <select onChange = {(e)=>setsel(e.target.value)}>
//         <option>select options</option>
//         <option>jay</option>
//         <option>keerthi</option>
//         <option>jay</option>
//       </select>
//       <br></br>
//       <input type = "checkbox"  onChange={(e)=>setcondi(e.target.checked)}/><span>Accept the term and condition</span><br></br>
// <button type= 'submit'>submit</button>
// <button onChange = {()=>{setsel("");setcondi(false);setname("");}}>clear</button>
//     </form>






//     </div>
//   )
// }


//program add login page with validation

// function App(){
//   return (
//         <div className="App">
//           <h1>fill the form</h1>

// <Logi></Logi>
// </div>)
// }

//program to constructor use it and create state


 

//  class App extends React.Component{
//   constructor(){

//     super();
//     this.state={
//       data:"jk",
//       email:"jk@kar"
//     }
//   }
//   componentDidMount(){
//     console.warn("this is compdidmount");
  
//   }
//   componentDidUpdate(preProps,preState,snapshot){
//   console.warn("compodidupadate");
//   }
    

//    changes(){
//     this.setState({data:"ak"})
//     this.setState({email:"ak@kar"})
//   }
//   render(){
//     return(
//       <div>
//         <h1>HELLO WORLD {this.state.data}</h1>
//         <button onClick={()=>this.changes()}>update</button>
//       </div>
//     )
//   }
//  }

//progarm to use boot strap and array list and make table by using map function loop

// function App(){
// const [idc,setid] = useState(1)
//   const stud = [
//     {name:"jk",email:"jk@kar",num:123},
//     {name:"pk",email:"pk@kar",num:122},
//     {name:"ak",email:"ak@kar",num:123},

//   ]
//   return (
//         <div className="App">
          
  
//     <Table  stripped variant="dark">
//       <thead>
//         <tr>
//           <th>id</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>number</th>
//         </tr>
//       </thead>
      
//         <tbody>
//           {
//       stud.map((item,i)=>
//         item.num==123?
//         <tr kay = {i}>
//           <td onChange ={()=>setid(idc+1)} >{i}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//           <td>{item.num}</td>
//         </tr>
//         :null
       
      


//       )
//     }
//     </tbody>
//     </Table>
  



         

// <Logi></Logi>
// </div>)
// }

//program use ref

// class App extends React.Component{
//     constructor(){
  
//       super();
//      this.inputRef = createRef();
//     }
//     getval()
//     {
//       console.warn(this.inputRef.current.value);
//       this.inputRef.current.style.color = "red";
//       this.inputRef.current.style.bachgroundColor = "red";
//     }
//    render()
//    {
//     return (
//       <div className = "App">


//         <input type ="text" ref = {this.inputRef} onClick = {()=>this.getval()}/>
//       </div>
//     )
    
//    }



 // }


 //program to use farward ref

  // function App(){
  //   let inputref = useRef();
  //  function getval()
  //       {
  //         console.warn(inputref.current.value);
  //         inputref.current.style.color = "red";
  //         inputref.current.style.bachgroundColor = "red";
  //       }
  //   return (
  //         <div className="App">
  //           <h1>fill the form</h1>
  //           <Frref ref = {inputref}/>

  //           <button onClick={getval}>update</button>
  // <Logi></Logi>
  // </div>)
  // }


  //program to controlled component
//   function App(){
//     const [val,setval] = useState("100")
//   return (
//         <div className="App">
//           <h1>controlled compo</h1>
//           <input type ="text" value={val} onChange = {(e)=>setval(e.target.value)}/> 
//           <h1>{val}</h1>
// <Logi></Logi>
// </div>)
// }


//program to do hoc - higher order components

// function App(){
      
//     return (
//           <div className="App">
//             <h1>hoc in reactjs</h1>
//            <Hocred cmp = {Counter}/>
//            <Hocgreen cmp = {Counter}/>
//            <Hocblue cmp = {Counter}/>
//   </div>
//   )
//   }

//   function Hocred(Props){

// return (<h2 style={{backgroundColor:"red",width:100}  }><Props.cmp/></h2>)
//   }
//   function Hocgreen(Props){

//     return (<h2 style={{backgroundColor:"green",width:100}  }><Props.cmp/></h2>)
//       }
//       function Hocblue(Props){

//         return (<h2 style={{backgroundColor:"blue",width:100}  }><Props.cmp/></h2>)
//           }


//   function Counter(){
//         const [val,setval] = useState(100)
//       return (
//             <div className="App">
//               <h1>{val}</h1>
//               <button onClick={()=>setval(val+1)}>update</button>
             
    
//     </div>)
//     }

import {createRef, useEffect, useState,useRef} from 'react'
import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

// import User from './Users'
// import Props from './props'
// import Logi from './login'
// import Frref from './farwrdref.js'
// import {useRef} from 'react'
// import { BrowserRouter, Route, Routes,Link,Navigate} from 'react-router-dom';
// import Nav from './navbar'
// import Param from './param'
// import Contact from './contact.js'
// import Company from './company.js'
// import Social from './socialmed.js'
// import Protect from './protectdata.js'


//progarm to use biulding page ,nested page ,login page,before login then use mechanism,creating navbar ,shifting page using navbar,
//protecting component before login,

// function Home(){
//   return(
//     <h1>this id home page</h1>
//   )
// }
// function App(){
//   return (
//         <div className="App">
          
//           <BrowserRouter>
//           <Nav></Nav>
          
//           <Routes>
//           <Route path = "/" element={<Protect Component={Home}/>}/>
//             <Route path = "/login" element={<Logi/>}/>
//             <Route path = "/about" element={<Protect Component={User}/>}/>
//             <Route path = "/user/:name" element={<Protect Component={Param}/>}/>
//             {/* <Route path = "/*" element={<h1>404 page</h1>}/> */}
//             <Route path = "/contact/" element={<Protect Component={Contact}/>}/>
              
//               <Route path = "company" element={<Protect Component={Company}/>}/>
//               <Route path = "accounts" element={<Protect Component={Social}/>}/>
              
//             //if u need to navigate
// {/* <Route path = "/*" element={<Navigate to = "/"/>}/> */}
//             </Routes></BrowserRouter>
          
// </div>)
// }

// function App(){
//   let data = [
//     {id:1,age:10,city:"bengaluru"},
//     {id:2,age:20,city:"bengau"},
//     {id:3,age:30,city:"benguru"},
//     {id:4,age:40,city:"buru"},
//   ]
//   return (
//         <div className="App">
//           <BrowserRouter>
//           <h1>making dynamic routing</h1>
//          {
//           data.map((item)=>
//           <div><Link to = {"/user/"+item.id}><h3>{item.id}</h3></Link></div>
//           )
//          }
//         <Route path="/user/:id"><Contact /></Route>
//          </BrowserRouter>
// </div>);
// }


//program to get data from api  crud operation on json file get post put delete update
// function App(){
// const [data,set] =useState([])
// const [id,setid] =useState([])
// const [age,setage] =useState([])
// const [city,setcity] =useState([])
//    useEffect(()=>{
//    getuser();
        
   
//   },[])
//   function getuser(){
//     fetch("http://localhost:6550").then((res)=>{
//       res.json().then((resp)=>{
       
//        console.warn(resp)
//           set(resp)
         
         
//       })
//       })

//   }
//    function deleteuser(id){
//     console.warn("dele called");
//     fetch(`http://localhost:6550/age=${id}`,{
//       method:"DELETE"
//     }).then((res)=>{
//       res.json().then((resu)=>{
//         console.warn(resu)
//         getuser();
//       })
//     })

//    }
//    function selectuser(sid){
//     alert(JSON.stringify(data[sid]));
//     setid(data[sid].id)
//     setage(data[sid].age)
//     setcity(data[sid].city)


//    }
//    function updateuser(){

//    let bitdata = {id,age,city}
//     console.warn(id,age,city);
//     fetch(`http://localhost:6550/id=${id}`,{
//       method:"PUT",
//       headers:{
//               "Accept":"application/json",
             
//               'Content-Type':"application/json"
//             },
//     }).then((res)=>{
//       res.json().then((resu)=>{
//         console.warn(resu)
//         getuser();
//       })
//     })

//    }

  
//   return (
//     <div className='App'>

// <h1>HELLO TO GET DATA</h1>
// <table  >
//        <thead>
//          <tr>
//           <th>id</th>
//            <th>age</th>
//            <th>city</th>
           
//          </tr>
//        </thead>
     
//          <tbody>
//            {
//       data.map((data,i)=>
        
//         <tr key = {i}>
//           <td>{data.id}</td>
//           <td>{data.age}</td>
//           <td>{data.city}</td>
//          <td> <button onClick = {()=>deleteuser(data.id)}>delete</button></td>
//          <td> <button onClick = {()=>selectuser(data.id)}>update</button></td>
//         </tr>
       
       
      


//       )
//     }
//     </tbody>
//     </table>


//    <input type ="text" value = {id} onChange = {(e)=>{setid(e.target.value)}} /><br></br>
//    <input type ="text"  value = {age} onChange = {(e)=>{setage(e.target.value)}}/><br></br>
//    <input type ="text"  value = {city} onChange = {(e)=>{setcity(e.target.value)}}/><br></br>
//    <button onClick = {()=>updateuser()}>update</button>
//     </div>
//   )

// }

//program to post in api

// function App(){

//   const [id,setid] = useState("")
//   const [age,setage] = useState("")
//   const [city,setcity] = useState("")
//   function saveuser(){
//     console.warn({id,age,city})
//     let data = {id,age,city};
//     fetch("http://localhost:6550/",{
//       method:"POST",
//     headers:{
//       "Accept":"application/json",
     
//       'Content-type':"application/json"
//     },
//     body:JSON.stringify(data)

    
//     }

//     ).then((res)=>{
//      res.json().then((resu)=>{
//       console.warn("result",resu)
//      })

//     })
//   }
//   return (
//       <div>
//           <h1>post in server</h1>
//           {/* <Link to ="/company">company</Link>
//           <Link to ="/accounts">accounts</Link> */}
//           <input type = "text" name="id" onChange = {(e)=>{setid(e.target.value)}}/><br></br>
//           <input type = "text" name="age" onChange = {(e)=>{setage(e.target.value)}}/><br></br>
//           <input type = "text" name="city" onChange = {(e)=>{setcity(e.target.value)}}/><br></br>
//           <button type = "button" onClick = {saveuser} >save new user</button>
//       </div>
//   )
// }


//program to use prestatevalue

// function App(){
//   const [count,setcount] = useState(0);
//   const [precount,setprecount] = useState(0);
//   function counter(){
//  let preval = Math.floor(Math.random()*10)

//  setcount((pre)=>{
//   setprecount(pre);
//   return preval;

//  })
//   }


//   return (
//     <div className="App">
// <h1>current state {count}</h1>
//       <h1>previos state {precount}</h1>
//       <button onClick = {counter}>update</button>
//     </div>
//   )
// }

// //useing hooks means using use ref
// function User(Props){
//   let lastval = useRef();
//   useEffect(()=>{
//     lastval.current = Props.count

//   })
//   return (
//     <div>
//       <h1>user compo maen prevval {lastval.current}</h1>
//     </div>
//   )
// }

// function App(){
   
//   const [count,setcount] = useState(0);
  

//     return (
//       <div className="App">
//  <User count = {count}/>
//  <h1>main compo {count}</h1>
//         <button onClick = {()=>setcount(Math.floor(Math.random()*10))}>update</button>
//       </div>
//     )
//   }

  //program to use state of object

//   



////start redux////

import Home from './containers/homecontainer.js';

const App=()=>{
  return (
    <div>
     <Home />

    </div>
  )
}


export default App;
