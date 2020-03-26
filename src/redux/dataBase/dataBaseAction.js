
import firebase from '../../firebase'
import {ADMIN_ERROR, ADMIN_SUCCESS, FIRE_FETCH, SHOW_LOADER} from "../actionTypes";
import objToArray from "../../helpFunctions/objToArray";

export function fireFetch(){
    return async dispatch => {
        try{
            const response = await firebase.database().ref("/")
            response.on("value", snapshot => {
                const db = snapshot.val()
                //adding empty arrays and covert to arrays
                Object.keys(db).forEach(stuff => {
                    Object.keys(db[stuff]).forEach(brand => {
                        if(!db[stuff][brand].hasOwnProperty("data")){
                            db[stuff][brand].data = []
                        } else {
                            db[stuff][brand].data = objToArray(db[stuff][brand].data)
                        }
                    })
                })
                dispatch({
                    type: FIRE_FETCH,
                    payload: {
                        Back: db.Back,
                        Chrome: db.Chrome,
                        Hood: db.Hood,
                        Visors: db.Main
                    }
                })
            })

        } catch(e){
            console.log("Error with database")
        }

    }
}

export function adminLogIn(email, password){
    return async dispatch => {
        dispatch({
            type: SHOW_LOADER
        })
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch({
                type: ADMIN_SUCCESS,
                payload: response.user
            })
        } catch(e){
            dispatch({
                type: ADMIN_ERROR,
                payload: e.message
            })
        }
    }
}

export function updateRecord(record, price){
    return async dispatch => {
        try{
            const response = await firebase.database().ref('/')
        } catch(e){
            console.log(e)
        }

    }
}


