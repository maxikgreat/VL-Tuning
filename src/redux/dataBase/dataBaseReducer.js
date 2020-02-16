
import modyfiedJson from './functions/modyfiedJson'

const mainBD = modyfiedJson()

const initialState = {
    //brands: getAllBrands(),
   Chrome: mainBD.Chrome,
   Visors: mainBD.Main,
   Back: mainBD.Back,
   Hood: mainBD.Hood,
   //Truck: mainBD.Truck
}

export default function dataBaseReducer(state = initialState, {type, payload}){
    switch(type){
        default: 
            return state
    }
}

