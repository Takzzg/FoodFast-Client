import {
    ADD_ITEM_CAR, 
    REMOVE_ITEM_CAR,
    EMPTY_CAR
} from "../actions/types"; 

const initialState = {
    shopCart: []
}


const shopCart = (state= initialState, action) => {
    const newState = {...state}
    switch (action.type) {
        case ADD_ITEM_CAR: 
            newState.shopCart.push(action.product)
            break
        case REMOVE_ITEM_CAR:
            newState.shopCart = newState.shopCart.filter(el=> el.id !== action.id)
            break
        case EMPTY_CAR:
            newState.shopCart = [];
            break
        default:
            break  
    }
    return {...newState}
}

export default shopCart