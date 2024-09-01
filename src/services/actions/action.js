import {Add} from "../constants"
import {Remove} from "../constants"
export const add  = (data)=>{
    console.warn("this is action page")
    console.warn("action_add_data : ",data)
    return{
        type:Add,
        data:data
    }
}
export const remove  = ()=>{
    return{
        type:Remove,
       
    }
}

