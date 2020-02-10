
import modyfiedJson from './functions/modyfiedJson'
import getAllBrands from './functions/getAllBrands'

//console.log(db)
const mainBD = modyfiedJson()

const initialState = {
    //brands: getAllBrands(),
   doorVisorsChrome: mainBD.Chrome,
   doorVisors: mainBD.Main,
   backSpoilers: mainBD.Back,
   hoodProtectors: mainBD.Hood,
   //Truck: mainBD.Truck
}

modyfiedJson()

export default function dataBaseReducer(state = initialState, {type, payload}){
    switch(type){
        default: 
            return state
    }
}

