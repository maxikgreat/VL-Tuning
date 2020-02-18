import { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from "../actionTypes"

const initialState = {
   items: [],
   total: 0,
   quantity: 0
}

export default function shoppingCartReducer(state = initialState, {type, payload}){
    switch(type){
        case ADD_ITEM:
            return{
                ...state, 
                items: [...state.items, payload],
                total: state.total + payload.Price,
                quantity: state.quantity + payload.quantity
            }
        case DELETE_ITEM:
            return{
                ...state,
                // items: (payload) => {

                // }
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

