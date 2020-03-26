import {ADMIN_ERROR, ADMIN_SUCCESS, FIRE_FETCH, SHOW_LOADER} from "../actionTypes";


const initialState = {
    user: null,
    error: null,
    data: null,
    isLoading: true
}

export default function dataBaseReducer(state = initialState, {type, payload}){
    switch(type){
        case FIRE_FETCH:
            return{
                ...state,
                data: {...payload},
                isLoading: false
            }
        case SHOW_LOADER:
            return{
                ...state,
                isLoading: true
            }
        case ADMIN_SUCCESS:
            return{
                ...state,
                user: payload,
                error: null,
                isLoading: false
            }
        case ADMIN_ERROR:
            return{
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}

