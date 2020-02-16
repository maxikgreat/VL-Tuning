import {combineReducers} from 'redux'
import choseStuffReducer from './choseStuff/choseStuffReducer'
import dataBaseReducer from './dataBase/dataBaseReducer'
import shoppingCartReducer from './shoppingCart/shoppingCartReducer'

export default combineReducers({
    choseStuff: choseStuffReducer,
    dataBase: dataBaseReducer,
    shoppingCart: shoppingCartReducer
})