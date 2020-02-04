import { SET_MODEL, SET_STUFF, SET_BRAND,CLEAR_ALL } from '../actionTypes'

//set
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

export function setStuff(stuff){
    return{
        type: SET_STUFF,
        payload: stuff
    }
}

//clearing

export function clearAll(){
    return{
        type: CLEAR_ALL
    }
}