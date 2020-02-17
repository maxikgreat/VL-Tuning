import { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from "../actionTypes"

const initialState = {
   items: [],
   total: 0
}

export default function shoppingCartReducer(state = initialState, {type, payload}){
    switch(type){
        case ADD_ITEM:
            return{
                ...state, 
                items: [...state.items, payload],
                total: state.total + payload.Price
            }
        case DELETE_ITEM:
            return{
                ...state
            }
        case DELETE_ALL:
            return{
                ...state,
                items: []
            }
        default: 
            return state
    }
}

