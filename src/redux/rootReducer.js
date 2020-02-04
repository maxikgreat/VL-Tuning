import {combineReducers} from 'redux'
import choseStuffReducer from './choseStuff/choseStuffReducer'
import dataBaseReducer from './dataBase/dataBaseReducer'

export default combineReducers({
    choseStuff: choseStuffReducer,
    dataBase: dataBaseReducer
})