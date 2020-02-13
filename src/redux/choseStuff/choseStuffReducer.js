import {SET_BRAND, SET_MODEL, SET_STUFF, CLEAR_ALL, CLEAR_BRAND, CLEAR_MODEL, CLEAR_STUFF} from '../actionTypes'

const initialState = {
    stuff: 'Hood',
    brand: 'Audi',
    model: ''
}

export default function choseStuffReducer(state = initialState, {type, payload}){
    switch(type){
        case SET_STUFF:
            return{
                ...state,
                stuff: payload
            }
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
        case CLEAR_STUFF:
            return{
                ...state,
                stuff: ''
            }
        case CLEAR_BRAND:
            return{
                ...state,
                brand: ''
            }
        case CLEAR_MODEL:
            return{
                ...state,
                model: ''
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

