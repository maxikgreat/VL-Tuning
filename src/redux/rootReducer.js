import {combineReducers} from 'redux'
import choseStuffReducer from './choseStuff/choseStuffReducer'
import dataBaseReducer from './dataBase/dataBaseReducer'
import shoppingCartReducer from './shoppingCart/shoppingCartReducer'
import modalReducer from "./modal/modalReducer"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['choseStuff', 'shoppingCart']
}


const rootReducer = combineReducers({
    choseStuff: choseStuffReducer,
    dataBase: dataBaseReducer,
    shoppingCart: shoppingCartReducer,
    modal: modalReducer
})

export default persistReducer(persistConfig, rootReducer)