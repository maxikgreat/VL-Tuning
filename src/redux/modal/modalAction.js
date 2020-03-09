import {OPEN_MODAL, CLOSE_MODAL} from "../actionTypes";

export function modalOpen(text, isSuccess){
    return{
        type: OPEN_MODAL,
        payload: {text, isSuccess}
    }
}

export function modalClose(){
    return{
        type: CLOSE_MODAL
    }
}
