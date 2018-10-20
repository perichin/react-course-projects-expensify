// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBZ-pceQ4fjVmaGc23tw4FFE6LycNOJINw",
    authDomain: "expensify-d1de0.firebaseapp.com",
    databaseURL: "https://expensify-d1de0.firebaseio.com",
    projectId: "expensify-d1de0",
    storageBucket: "expensify-d1de0.appspot.com",
    messagingSenderId: "61112735611"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', snapshot => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', snapshot => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', snapshot => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];

//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', snapshot => {
//         const expenses = [];

//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'You must pay this rent!',
//     amount: 109500,
//     createdAt: 96324432355433
// });

// database.ref('notes/-LPDOmmIle1_oYvR5xYf').remove();

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React, Webpack, Redux'
// });


// const firebaseNotes = {
//     notes: {
//         fwedfeww: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         vcdwfewfwd: {
//             title: 'Another note!',
//             body: 'This is my second note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref()
//     .once('value')
//     .then((snapshot) => console.log(snapshot.val()))
//     .catch(e => console.log(`Error fetching data ${e}`));

// database.ref().set({
//     name: 'Slobo Perichin',
//     age: 38,
//     isSingle: false,
//     location: {
//         city: 'Belgrade',
//         country: 'Serbia'
//     }
// })
// .then(() => console.log('Data is saved'))
// .catch(e => console.log(`This failed. ${e}`));

// // database.ref().set([1, 2, 3]);

// database.ref('age').set(27);
// database.ref('location/city').set('New Now');

// database.ref('attributes').set({
//     height: 173,
//     weight: 95
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => console.log('Data was removed'))
//     .catch(e => console.log(`Did not remove data, ${e}`));

// database.ref('isSingle').set(null);

// database.ref().update({
//     name: 'Micca',
//     age: 29,
//     job: 'Software developer',
//     isSingle: null
// });

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'New Now'
// });
