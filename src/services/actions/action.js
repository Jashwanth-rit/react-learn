import {Add} from "../constants"
import {Remove} from "../constants"
export const add  = (data)=>{
    return{
        type:Add,
        data:data
    }
}
export const remove  = (data)=>{
    return{
        type:Remove,
        data:data
    }
}

