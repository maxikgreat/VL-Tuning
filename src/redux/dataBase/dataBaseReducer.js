import {FIRE_FETCH} from "../actionTypes";


const initialState = {
   Chrome: null,
   Visors: null,
   Back: null,
   Hood: null
   //Truck: mainBD.Truck
}

export default function dataBaseReducer(state = initialState, {type, payload}){
    switch(type){
        case FIRE_FETCH:
            return{
                Chrome: payload.Chrome,
                Visors: payload.Main, // !!!! different name
                Back: payload.Back,
                Hood: payload.Hood
            }
        default:
            return state
    }
}

