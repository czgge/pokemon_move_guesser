# 🎮 Indovina il Pokémon dalle Mosse

Un gioco interattivo dove devi indovinare il Pokémon basandoti sulle sue mosse! Compete con giocatori di tutto il mondo attraverso una classifica globale salvata su Firebase.

## 🌟 Caratteristiche

- ✨ Interfaccia moderna e responsive
- 🎯 Oltre 70 Pokémon dalle generazioni 1-8
- 🔥 Sistema di streak per punti bonus
- ❤️ Sistema a 3 vite
- 🏆 **Classifica globale condivisa** tramite Firebase
- 📊 Top 10 giocatori in tempo reale

## 🚀 Setup Firebase (Obbligatorio)

### Passo 1: Crea un Progetto Firebase

1. Vai su [Firebase Console](https://console.firebase.google.com/)
2. Clicca su **"Aggiungi progetto"** (o "Create a project")
3. Scegli un nome per il progetto (es: "pokemon-game")
4. Disabilita Google Analytics (opzionale, non necessario per questo progetto)
5. Clicca su **"Crea progetto"**

### Passo 2: Configura Realtime Database

1. Nel menu laterale, clicca su **"Realtime Database"**
2. Clicca su **"Crea database"**
3. Scegli una location (es: europe-west1)
4. **IMPORTANTE**: Seleziona **"Inizia in modalità test"** (per permettere lettura/scrittura)
5. Clicca su **"Abilita"**

### Passo 3: Configura le Regole di Sicurezza

Dopo aver creato il database, vai nella tab **"Regole"** e sostituisci il contenuto con:

```json
{
  "rules": {
    "leaderboard": {
      ".read": true,
      ".write": true,
      "$scoreId": {
        ".validate": "newData.hasChildren(['name', 'score', 'streak', 'date', 'timestamp'])"
      }
    }
  }
}
```

⚠️ **NOTA**: Queste regole permettono a chiunque di leggere e scrivere. Per un progetto in produzione, dovresti implementare autenticazione e regole più restrittive.

Clicca su **"Pubblica"** per salvare le regole.

### Passo 4: Ottieni le Credenziali Firebase

1. Clicca sull'icona dell'ingranaggio ⚙️ in alto a sinistra
2. Seleziona **"Impostazioni progetto"**
3. Scorri verso il basso fino alla sezione **"Le tue app"**
4. Clicca sull'icona **`</>`** (Web)
5. Dai un nickname all'app (es: "pokemon-web-app")
6. **NON** spuntare "Configura anche Firebase Hosting"
7. Clicca su **"Registra app"**
8. Copia l'oggetto `firebaseConfig` che appare (simile a questo):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAbc123...",
  authDomain: "tuo-progetto.firebaseapp.com",
  databaseURL: "https://tuo-progetto-default-rtdb.firebaseio.com",
  projectId: "tuo-progetto",
  storageBucket: "tuo-progetto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

### Passo 5: Crea il File di Configurazione

1. Copia il file `firebase-config-example.js` e rinominalo in `firebase-config.js`
2. Apri `firebase-config.js` e sostituisci i valori con quelli del tuo progetto Firebase
3. Salva il file

⚠️ **IMPORTANTE**: NON caricare `firebase-config.js` su GitHub! È già incluso nel `.gitignore`

## 📦 File del Progetto

Questi sono i file che devi caricare su GitHub:

```
pokemon-game/
├── index.html                    # File principale del gioco
├── firebase-config-example.js    # Esempio di configurazione (da NON modificare)
├── .gitignore                    # Esclude firebase-config.js da GitHub
└── README.md                     # Questo file
```

**NON includere:**
- `firebase-config.js` (contiene le tue credenziali)

## 📤 Caricamento su GitHub

### Metodo 1: GitHub Web Interface (più semplice)

1. Vai su [GitHub](https://github.com) e fai login
2. Clicca sul **"+"** in alto a destra → **"New repository"**
3. Dai un nome al repository (es: "pokemon-moves-game")
4. Seleziona **"Public"** se vuoi che sia visibile a tutti
5. Clicca su **"Create repository"**
6. Clicca su **"uploading an existing file"**
7. Trascina questi file:
   - `index.html`
   - `firebase-config-example.js`
   - `.gitignore`
   - `README.md`
8. Scrivi un messaggio di commit (es: "Initial commit")
9. Clicca su **"Commit changes"**

### Metodo 2: Git Command Line

```bash
# Clona il repository (sostituisci con il tuo username e nome repo)
git clone https://github.com/TUO_USERNAME/pokemon-moves-game.git
cd pokemon-moves-game

# Copia i file nella cartella
# (copia index.html, firebase-config-example.js, .gitignore, README.md)

# Aggiungi i file
git add .

# Fai il commit
git commit -m "Initial commit"

# Pusha su GitHub
git push origin main
```

## 🌐 Attivare GitHub Pages

1. Vai sul tuo repository su GitHub
2. Clicca su **"Settings"**
3. Nel menu laterale, clicca su **"Pages"**
4. In **"Source"**, seleziona **"Deploy from a branch"**
5. Seleziona **"main"** e **"/ (root)"**
6. Clicca su **"Save"**

Dopo qualche minuto, il tuo gioco sarà accessibile all'URL:
```
https://TUO_USERNAME.github.io/pokemon-moves-game/
```

## ⚙️ Configurazione Finale

Dopo aver caricato su GitHub Pages:

1. Apri il sito del gioco
2. Apri la **Console del Browser** (F12)
3. Se vedi errori come "Firebase config non trovato":
   - Crea il file `firebase-config.js` localmente
   - Caricalo manualmente nella stessa directory di `index.html`
   - Oppure usa GitHub Actions/Secrets (avanzato)

### Soluzione Alternativa: Hosting Completo

Se GitHub Pages ti da problemi con `firebase-config.js`, puoi:

**Opzione A - Firebase Hosting:**
1. Installa Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Inizializza: `firebase init hosting`
4. Deploy: `firebase deploy`

**Opzione B - Netlify/Vercel:**
Entrambi supportano file di configurazione privati tramite variabili d'ambiente.

## 🎮 Come Giocare

1. Inserisci il tuo nome
2. Scegli la generazione di Pokémon
3. Osserva le 4 mosse mostrate
4. Indovina il Pokémon corretto
5. Hai 3 tentativi per puzzle
6. Accumula punti con le vittorie consecutive
7. Compete nella classifica globale!

## 🔒 Sicurezza

⚠️ **IMPORTANTE**: Le credenziali Firebase nel file `firebase-config.js` sono visibili a chiunque visiti il sito. Per questo progetto è accettabile perché:

1. Usiamo Realtime Database con regole pubbliche
2. Non c'è autenticazione utenti
3. È un gioco semplice senza dati sensibili

**Per progetti seri:**
- Implementa Firebase Authentication
- Usa regole di sicurezza più restrittive
- Considera l'uso di Cloud Functions per operazioni sensibili
- Implementa rate limiting per prevenire spam

## 🛠️ Troubleshooting

### Errore: "Firebase config non trovato"
- Verifica che `firebase-config.js` esista e sia accessibile
- Controlla che il file sia nella stessa directory di `index.html`
- Apri la console del browser per dettagli

### Classifica non si carica
- Verifica che il database Firebase sia attivo
- Controlla le regole di sicurezza
- Guarda la console del browser per errori

### Punteggi non vengono salvati
- Controlla la connessione a Internet
- Verifica che le credenziali Firebase siano corrette
- Assicurati che `databaseURL` sia presente nella config

## 📝 Licenza

Questo è un progetto educativo. Sentiti libero di modificarlo e usarlo come preferisci!

## 🙏 Crediti

- Dati Pokémon e mosse basati su informazioni pubbliche
- Interfaccia creata con React e Tailwind CSS
- Database gestito con Firebase Realtime Database

---

**Buon divertimento e che vinca il miglior allenatore! 🏆**
