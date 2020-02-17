import { ADD_ITEM, DELETE_ALL, DELETE_ITEM } from "../actionTypes";

// actions for shopping cart

export function addItem(item){
    return{
        type: ADD_ITEM,
        payload: item
    }
}

export function deleteItem(itemId){
    return{
        type: DELETE_ITEM,
        payload: itemId
    }
}

export function deleteAll(){
    return{
        type: DELETE_ALL
    }
}