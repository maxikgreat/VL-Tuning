import {SET_BRAND, SET_MODEL, SET_STUFF, CLEAR_ALL} from '../actionTypes'

const initialState = {
    brand: '',
    model: '',
    stuff: ''
}

export default function choseStuffReducer(state = initialState, {type, payload}){
    switch(type){
        case SET_BRAND:
            return{
                ...state,
                brand: payload
            }
        case SET_MODEL:
            return{
                ...state,
                model: payload
            }
        case SET_STUFF:
            return{
                ...state,
                stuff: payload
            }
        case CLEAR_ALL:
            return{
                brand: '',
                model: '',
                stuff: ''
            }
        default:
            return state
    }
}

