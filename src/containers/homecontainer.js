import Home from '../components/home.js';
import Cart from '../components/cart.js';
import {connect} from 'react-redux'
import  {add} from "../services/actions/action"
import { remove } from '../services/actions/action';
//import carditem from '../services/reducer/reducer.js';
console.warn("this is homecontainer page")
const mapstate  = state =>({
    
data:state.carditem
})
const mapdisp = dispatch=>({

    addtocart:data=>dispatch(add(data)),
    removefromcart:data=>dispatch(remove())

})




export default connect(mapstate,mapdisp)(Home);