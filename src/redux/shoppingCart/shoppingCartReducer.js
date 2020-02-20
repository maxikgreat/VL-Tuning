import { ADD_NEW_ITEM, ADD_EXIST_ITEM, DELETE_ITEM, DELETE_ALL } from "../actionTypes"

const initialState = {
   items: [],
   total: 0,
   quantity: 0
}

export default function shoppingCartReducer(state = initialState, {type, payload}){
    switch(type){
        case ADD_NEW_ITEM:
            return{
                ...state, 
                items: [...state.items, payload],
                total: state.total + payload.Price * payload.Quantity,
                quantity: state.quantity + payload.Quantity
            }
        case ADD_EXIST_ITEM:
            return{
                ...state,
                items: payload.newItems,
                total: state.total + payload.existItem.Price * payload.existItem.Quantity,
                quantity: state.quantity + payload.existItem.Quantity
            }
        case DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter(item => item.ID !== payload.ID),
                total: state.total - payload.Price * payload.Quantity,
                quantity: state.quantity - payload.Quantity
            }
        case DELETE_ALL:
            return{
                ...state,
                items: [],
                total: 0,
                quantity: 0
            }
        default: 
            return state
    }
}

