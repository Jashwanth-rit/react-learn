import {Add} from "../constants"

const initial = {
    carddata:[]
}

function carditem(state=initial,action){

    switch(action.type)
{
    case Add:
        return{
            ...state,
            carddata:action.data
        }
        break;
        default:
            return state
}
}

export default carditem;