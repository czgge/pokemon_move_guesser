// ISTRUZIONI: 
// 1. Copia questo file e rinominalo in "firebase-config.js"
// 2. Sostituisci i valori qui sotto con quelli del tuo progetto Firebase
// 3. NON condividere questo file pubblicamente - aggiungi "firebase-config.js" al tuo .gitignore

const firebaseConfig = {
  apiKey: "TUA_API_KEY_QUI",
  authDomain: "tuo-progetto.firebaseapp.com",
  databaseURL: "https://tuo-progetto-default-rtdb.firebaseio.com",
  projectId: "tuo-progetto",
  storageBucket: "tuo-progetto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Non modificare questa riga
if (typeof module !== 'undefined' && module.exports) {
  module.exports = firebaseConfig;
}
