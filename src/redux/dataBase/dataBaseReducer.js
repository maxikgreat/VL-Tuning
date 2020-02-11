
import modyfiedJson from './functions/modyfiedJson'
import getAllBrands from './functions/getAllBrands'

const mainBD = modyfiedJson()

const initialState = {
    //brands: getAllBrands(),
   Chrome: mainBD.Chrome,
   Visors: mainBD.Main,
   Back: mainBD.Back,
   Hood: mainBD.Hood,
   //Truck: mainBD.Truck
}

modyfiedJson()

export default function dataBaseReducer(state = initialState, {type, payload}){
    switch(type){
        default: 
            return state
    }
}

