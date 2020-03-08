import {FIRE_FETCH} from "../actionTypes";


const initialState = {
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
        default:
            return state
    }
}

