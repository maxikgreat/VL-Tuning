import { SET_MODEL, SET_STUFF, SET_BRAND, CLEAR_BRAND, CLEAR_STUFF, CLEAR_MODEL, CLEAR_ALL } from '../actionTypes'

//set
export function setStuff(stuff){
    switch(stuff){
        case "Ветровики":
            stuff = "Visors"
            break;
        case "Ветровики Хром":
            stuff = "Chrome"
            break;
        case "Мухобойки":
            stuff = "Hood"
            break;
        case "Спойлера":
            stuff = "Back"
            break;
        default:
            break;
    }
    return{
        type: SET_STUFF,
        payload: stuff
    }
}
export function setBrand(brand){
        return{
            type: SET_BRAND,
            payload: brand
        }
}

export function setModel(model){
    return{
        type: SET_MODEL,
        payload: model
    }
}
//clearing

export function clearStuff(){
    return{
        type: CLEAR_STUFF
    }
}

export function clearBrand(){
    return{
        type: CLEAR_BRAND
    }
}

export function clearModel(){
    return{
        type: CLEAR_MODEL
    }
}

export function clearAll(){
    return{
        type: CLEAR_ALL
    }
}