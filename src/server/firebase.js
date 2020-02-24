import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9yl0db7s0GaM22eM7wsY3Kx_SVisO368",
    authDomain: "inmobiliaria-e6b26.firebaseapp.com",
    databaseURL: "https://inmobiliaria-e6b26.firebaseio.com",
    projectId: "inmobiliaria-e6b26",
    storageBucket: "inmobiliaria-e6b26.appspot.com",
    messagingSenderId: "697180860916",
    appId: "1:697180860916:web:34a664fd0a9c2f814949a1",
    measurementId: "G-NB8X62ZFSN"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth()
    }
}

export default Firebase;