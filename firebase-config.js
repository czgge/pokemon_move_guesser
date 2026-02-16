// ⚠️ ISTRUZIONI IMPORTANTI ⚠️
// 
// Questo file contiene le credenziali Firebase per il tuo gioco.
// 
// PASSI DA SEGUIRE:
// 
// 1. Vai su https://console.firebase.google.com/
// 2. Crea un nuovo progetto
// 3. Abilita "Realtime Database" in modalità test
// 4. Vai in Impostazioni Progetto > Le tue app > Web
// 5. Copia i valori e sostituisci qui sotto
// 6. Salva questo file
// 
// ⚠️ NON caricare questo file su GitHub pubblicamente!
// (è già nel .gitignore)

const firebaseConfig = {
  apiKey: "AIzaSyBm7rLgNDnrYxPRVzsVluzjwro36FNyI1M",
  authDomain: "pokemonmoveguesser.firebaseapp.com",
  databaseURL: "https://pokemonmoveguesser-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemonmoveguesser",
  storageBucket: "pokemonmoveguesser.firebasestorage.app",
  messagingSenderId: "110058260744",
  appId: "1:110058260744:web:2c75192a5bc3d846b5c4bd",
  measurementId: "G-HZV49W8JCH"
};

// Non modificare sotto questa riga
if (typeof module !== 'undefined' && module.exports) {
  module.exports = firebaseConfig;
}
