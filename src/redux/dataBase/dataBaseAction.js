
import firebase from '../../firebase'
import {
    ADMIN_ERROR,
    ADMIN_SUCCESS,
    ERROR_UPDATED,
    FIRE_FETCH,
    OPEN_MODAL,
    SHOW_LOADER,
    SUCCESS_UPDATED
} from "../actionTypes";
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
            dispatch({
                type: OPEN_MODAL,
                payload: {
                    text: e.message,
                    isSuccess: false
                }
            })
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

export function updateRecordPrice(record, price){
    return async dispatch => {
        try{
            const response = await firebase.database().ref(`/${record.stuff}/${record.brand}/data/${record.model.ID}`)
                .child("Price").set(price)
                dispatch({
                    type: OPEN_MODAL,
                    payload: {
                        text: "Record was updated",
                        isSuccess: true
                    }
                })
        } catch(e){
            dispatch({
                type: OPEN_MODAL,
                payload: {
                    text: e.message,
                    isSuccess: false
                }
            })
        }

    }
}

export function updateRecordPhoto(record, photo) {
    return async dispatch => {
        try{
            const response = await firebase.storage().ref(`images/${record.stuff}/${record.brand}/${record.model.ID}`).put(photo)
                .then(() => {
                    const photoSrc = firebase.storage().ref(`images/${record.stuff}/${record.brand}/${record.model.ID}`).getDownloadURL()
                        .then(url => {
                            firebase.database().ref(`/${record.stuff}/${record.brand}/data/${record.model.ID}`).child("Photo").set(url)
                                .then(() => {
                                    dispatch({
                                        type: OPEN_MODAL,
                                        payload: {
                                            text: "Photo was added",
                                            isSuccess: true
                                        }
                                    })
                                })
                        })
                })

        } catch (e) {
            dispatch({
                type: OPEN_MODAL,
                payload: {
                    text: e.message,
                    isSuccess: false
                }
            })
        }
    }
}

export function deleteRecordPhoto(record){
    return async dispatch => {
        try{
            const response = await firebase.database().ref(`/${record.stuff}/${record.brand}/data/${record.model.ID}`)
                .child("Photo").set(null)
                .then(() => {
                    dispatch({
                        type: OPEN_MODAL,
                        payload: {
                            text: "Default photo set",
                            isSuccess: true
                        }
                    })
                })
        } catch(e){
            dispatch({
                type: OPEN_MODAL,
                payload: {
                    text: e.message,
                    isSuccess: false
                }
            })
        }

    }
}