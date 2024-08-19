import React from 'react';
import Home from '../components/home.js';
import {connect} from 'react-redux'
import  {add} from "../services/actions/action"

const mapstate  = state =>({

})
const mapdisp = dispatch=>({

    addtocart:data=>dispatch(add(data))

})




export default connect(mapstate,mapdisp)(Home);