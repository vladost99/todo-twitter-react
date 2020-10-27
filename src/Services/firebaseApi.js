import firebase from 'firebase';

 export default class FirebaseApi {
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyAJ3ez12O-4Ql243C_kHPzjTgXWUMNs3qU",
            authDomain: "todo-react-twitter.firebaseapp.com",
            databaseURL: "https://todo-react-twitter.firebaseio.com",
            projectId: "todo-react-twitter",
            storageBucket: "todo-react-twitter.appspot.com",
            messagingSenderId: "353557774575",
            appId: "1:353557774575:web:b11860f253c321a4a5db1a",
            measurementId: "G-MFPDPBRQBK"
          };

          firebase.initializeApp(this.firebaseConfig);

          this.database = firebase.database();
        }

        generateId = () => {
            return '_' + Math.random().toString(36).substr(2, 9);
        }

     writeData = (name) => {
         const id = this.generateId();
         this.database.ref(`todo/${id}`).set({
            label: name,
            important: false,
            id: id,
            like: false
         });
    }

    getTodo = () => {
       return this.database.ref(`todo/`);
    }

    removeTodo = (id) => {
        this.database.ref(`todo/${id}`).remove();
    }

    updateData = (label,id,important, like) => {
        const postData = {
            label: label,
            important: important,
            id: id,
            like: like
        };
        this.database.ref(`todo/${id}`).update(postData);

    }
  }