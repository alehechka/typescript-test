import { AuthActionTypes, LOGIN_ERROR, LOGIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS} from '../types/authTypes';
import CredentialsModel from '../../models/Credentials';

interface Functions {
    getFirestore: () => any;
    getFirebase: () => any;
}

export const signIn = (credentials: CredentialsModel) => {
    return (dispatch: (action: AuthActionTypes) => void, getState: () => any, { getFirebase }: Functions) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          dispatch({ type: LOGIN_SUCCESS });
        })
        .catch((err: Error) => {
          dispatch({ type: LOGIN_ERROR, err });
        });
    };
  };
  
  export const signOut = () => {
    return (dispatch: (action: AuthActionTypes) => void, getState: () => any, { getFirebase }: Functions) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: SIGNOUT_SUCCESS });
        });
    };
  };
  
  export const signUp = (newUser: CredentialsModel) => {
    return (dispatch: (action: AuthActionTypes) => void, getState: () => any, { getFirebase, getFirestore }: Functions) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((res: any) => {
          return firestore
            .collection("users")
            .doc(res.user.uid)
            .set({
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              initials: newUser.firstName[0] + newUser.lastName[0],
            });
        })
        .then(() => {
          dispatch({ type: SIGNUP_SUCCESS });
        })
        .catch((err: Error) => {
          dispatch({ type: SIGNUP_ERROR, err });
        });
    };
  };
  