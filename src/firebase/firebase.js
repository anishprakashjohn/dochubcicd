import * as firebase from 'firebase';

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyCWwOLR0cVC1HdkvVCXBEqeBczcfk8Jl8k",
    authDomain: "lvdhub.firebaseapp.com",
    databaseURL: "https://lvdhub.firebaseio.com",
    projectId: "lvdhub",
    storageBucket: "lvdhub.appspot.com",
    messagingSenderId: "825456127752"
  };
  firebase.initializeApp(config);

  const database = firebase.database();
  export { firebase, database as default };

// //   database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// //   })

// //   setTimeout(()=> {
// //       database.ref('age').set(30)
// //   },3500)

// //   setTimeout(()=> {
// //     database.ref().off()
// // },7000)

// // setTimeout(()=> {
// //     database.ref('age').set(35)
// // },10500)

// database.ref().on('value', (snapshot) => {
//                     const  value=snapshot.val()
//                     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`)
//                 })

//     setTimeout(()=> {
//         database.ref('name').set('Anish Prakash John')
//     },5000)

// //   database.ref()
// //     .once('value')
// //     .then((snapshot)=> {
// //         const val = snapshot.val();
// //         console.log(val)
// //     }).catch((e)=> {
// //         console.log('Error fetching data',e);
// //     })

// //   database.ref().set({
// //       name: 'Anish John',
// //       age: 31,
// //       stressLevel: 6,
// //       job: {
// //           title: 'Software Engineer',
// //           company: 'Google'
// //       },
// //       isSingle: false,
// //       location: {
// //           city: 'Melb and Paruthumpare',
// //           country: 'India'
// //       }
// //   }).then(()=> {
// //       console.log('Data is saved');
// //   }).catch((error)=> {
// //       console.log(error);
// //   })

// //   database.ref().update({
// //       stressLevel: 9,
// //       'job/company': 'Amazon',
// //       'location/city': 'Seattle'
// //   })
// // database.ref('location/country').set('India2').then(()=> {
// //     console.log('Data was saved');
// // }).catch((error)=> {
// //     console.log(error)
// // })

// // database.ref('isSingle')
// //     .remove()
// //     .then(()=> {
// //     console.log('Removed Data')
// // }).catch((error) => {
// //     console.log('Error Data')
// // })

