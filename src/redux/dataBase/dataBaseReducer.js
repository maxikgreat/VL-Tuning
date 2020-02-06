
import importSrcLogos from '../../functions/importSrcLogos'
import extractBrandNames from '../../functions/extractBrandNames'

const initialState = {
   logos: importSrcLogos(),
   brands: extractBrandNames(importSrcLogos())
}

export default function dataBaseReducer(state = initialState, {type, payload}){
    switch(type){
        default: 
            return state
    }
}

