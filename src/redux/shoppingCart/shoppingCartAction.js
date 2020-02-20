import { ADD_NEW_ITEM, ADD_EXIST_ITEM, DELETE_ALL, DELETE_ITEM } from "../actionTypes";

// actions for shopping cart

export function addNewItem(item){
    return{
        type: ADD_NEW_ITEM,
        payload: {...item}
    }
}

export function addExistItem(prevItems, existItem){

    const indexFounded = prevItems.findIndex(item => item.ID === existItem.ID)

    const newItems = prevItems.map((item, index) => {
        if(indexFounded !== index){
            return item
        }else{
            return{
                ...item,
                ...item.Quantity += existItem.Quantity
            }
        }
    })
    return{
        type: ADD_EXIST_ITEM,
        payload: {newItems, existItem}
    }
}

export function deleteItem(itemToDelete){
    return{
        type: DELETE_ITEM,
        payload: itemToDelete
    }
}

export function deleteAll(){
    return{
        type: DELETE_ALL
    }
}