var firebase_app = {};

function firebaseInit() {
  var firebaseConfig = {
      apiKey: "AIzaSyC9LeFmQAX4jBcbyASwnFblqxRktMqGjsU",
      authDomain: "test-phone-auth-5aea0.firebaseapp.com",
      databaseURL: "https://test-phone-auth-5aea0.firebaseio.com",
      projectId: "test-phone-auth-5aea0",
      storageBucket: "test-phone-auth-5aea0.appspot.com",
      messagingSenderId: "51495325106",
      appId: "1:51495325106:web:0581784809bcfc0d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase_app= firebase;

    console.log("Firebase Init");
}
