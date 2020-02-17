import { ADD_ITEM, DELETE_ALL } from "../actionTypes";

// actions for shopping cart

export function addItem(item){
    return{
        type: ADD_ITEM,
        payload: item
    }
}

export function deleteAll(){
    return{
        type: DELETE_ALL
    }
}