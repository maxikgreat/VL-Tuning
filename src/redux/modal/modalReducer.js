
import {OPEN_MODAL, CLOSE_MODAL} from "../actionTypes";

const initialState = {
    text: "",
    isSuccess: null,
    isOpen: false
}

export default function modalReducer(state = initialState, {type, payload}){
    switch (type) {
        case OPEN_MODAL:
            return{
                ...state,
                isOpen: true,
                text: payload.text,
                isSuccess: payload.isSuccess
            }
        case CLOSE_MODAL:
            return{
                ...state,
                isOpen: false,
                isSuccess: null,
                text: ""
            }
        default:
            return state
    }
}