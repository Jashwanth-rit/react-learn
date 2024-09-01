import { Add, Remove } from "../constants";

const initial = {
    carddata: []
}

function carditem(state = initial.carddata, action) {
    console.warn("this is reducer page");
    console.warn("reducer : ", action);

    switch (action.type) {
        case Add:
            return [
                ...state,
                { carddata: action.data }
            ]
        case Remove:
            // Remove the last item without mutating the original state
            return state.slice(0, -1);

        default:
            return state;
    }
}

export default carditem;
