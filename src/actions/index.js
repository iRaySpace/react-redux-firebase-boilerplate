import { todosRef, authRef, googleProvider, facebookProvider } from "../config/firebase";
import { FETCH_TODOS, FETCH_USER } from "./types";

export const addToDo = (newToDo, uid) => async dispatch => {
    todosRef
        .child(uid)
        .push()
        .set(newToDo);
};

export const completeToDo = (completeToDoId, uid) => async dispatch => {
    todosRef
        .child(uid)
        .child(completeToDoId)
        .remove();
};

export const fetchToDos = uid => async dispatch => {
    todosRef.child(uid).on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: FETCH_USER,
                payload: user
            });
        } else {
            dispatch({
                type: FETCH_USER,
                payload: null
            });
        }
    });
};

export const signIn = (provider = "") => dispatch => {
    let authProvider = googleProvider;

    if (provider === "Facebook") {
        authProvider = facebookProvider;
    } 

    authRef
        .signInWithPopup(authProvider)
        .then(result => { })
        .catch(error => {
            console.error(error);
        });
};

export const signUp = (username, password) => dispatch => {
    authRef
        .createUserWithEmailAndPassword(username, password)
        .then(result => {
            authRef.currentUser.sendEmailVerification()
            .catch(error =>{
                console.log(error);
            })
         })
        .catch(error => {
            console.log(error);
        });
};


export const signOut = () => dispatch => {
    authRef
        .signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch(error => {
            console.log(error);
        });
};

export const setDisplayName = (name) => dispatch => {
    authRef
        .currentUser
        .updateProfile({
            displayName: name
        }).then(function () {
            console.log(authRef.currentUser);
        }).catch(function (error) {
            console.log(error);
        });
};




