import {ADMIN_ERROR, ADMIN_SUCCESS, FIRE_FETCH} from "../actionTypes";


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
                data: {...payload},
                isLoading: false
            }
        case ADMIN_SUCCESS:
            return{
                user: payload,
                error: null
            }
        case ADMIN_ERROR:
            return{
                error: payload
            }
        default:
            return state
    }
}

