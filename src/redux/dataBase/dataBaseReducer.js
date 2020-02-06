
import getAllBrands from './functions/getAllBrands'

const initialState = {
   brands: getAllBrands()
}

export default function dataBaseReducer(state = initialState, {type, payload}){
    switch(type){
        default: 
            return state
    }
}

