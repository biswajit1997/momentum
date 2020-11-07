import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB-xBRkOfQngJbam008_bBkWgA3ibe2rVA",
  authDomain: "momentum-e7bef.firebaseapp.com",
  databaseURL: "https://momentum-e7bef.firebaseio.com",
  projectId: "momentum-e7bef",
  storageBucket: "momentum-e7bef.appspot.com",
  messagingSenderId: "406851941644",
  appId: "1:406851941644:web:726535e010f14827f90529",
  measurementId: "G-D19B5CEBGM",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
