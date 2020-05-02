import { ProjectActionTypes, CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types/projectTypes";
import ProjectModel from "../../models/Project";

interface Functions {
    getFirestore: () => any;
    getFirebase: () => any;
}

export const createProject = (project: ProjectModel) => {
    return (dispatch: (action: ProjectActionTypes) => void, getState: () => any, { getFirestore }: Functions) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: CREATE_PROJECT, project });
        }).catch((err: Error) => {
            dispatch({ type: CREATE_PROJECT_ERROR, err });
        })
    }
};