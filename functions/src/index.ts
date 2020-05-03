const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request:any, response:any) => {
    response.send("Hello from Firebase!");
});

const createNotification = ((notification: any) => {
    return admin.firestore()
        .collection('notifications')
        .add(notification)
        .then((doc: any) => console.log('notification added', doc));
})

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate((doc:any) => {
        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: new Date()
        }
        return createNotification(notification);
    })

exports.userJoined = functions.auth.user()
    .onCreate((user:any) => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then((doc:any) => {
                const newUser = doc.data();
                const notification = {
                    content: 'Joined the party',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: new Date()
                }
                return createNotification(notification);
            })

    })
