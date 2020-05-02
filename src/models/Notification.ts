export default interface Notification {
    id: string;
    user: string;
    time: firebase.firestore.Timestamp;
    content: string;
}