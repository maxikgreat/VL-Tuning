//todo adminka to manipulate database

//write all to bd
//console.log(firebase.database().ref("/").set(bd))

import firebase from '../../firebase'
import {FIRE_FETCH} from "../actionTypes";

export function fireFetch(){
    return async dispatch => {
        try{
            const response = await firebase.database().ref("/").once("value")

            const db = response.val()
            // adding empty arrays
            Object.keys(db).forEach(stuff => {
                Object.keys(db[stuff]).forEach(brand => {
                    if(!db[stuff][brand].hasOwnProperty("data")){
                        db[stuff][brand].data = []
                    }
                })
            })

            dispatch({
                type: FIRE_FETCH,
                payload: db
            })
        } catch(e){
            console.log("Error with database")
        }

    }
}

