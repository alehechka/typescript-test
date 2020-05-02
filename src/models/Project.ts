export default interface Project {
    id?: string;
    title: string;
    authorFirstName?: string;
    authorLastName?: string;
    content: string;
    createdAt?: firebase.firestore.Timestamp;
}
