import React,{forwardRef} from 'react'

function Frref(props,ref){

    return (
        <div className="App">
          <h1>fill the form</h1>

           <input type ="text" ref ={ref}/> 



</div>)



}
export default forwardRef(Frref);