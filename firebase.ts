import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs8v9faK1H4Ka0dm8faLDjZekUV8xVrg4",
  authDomain: "firegpt.firebaseapp.com",
  projectId: "firegpt",
  storageBucket: "firegpt.appspot.com",
  messagingSenderId: "937725720693",
  appId: "1:937725720693:web:000a6fe8d19e10c317e03c",
};

// Initialize Firebase singleton
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Get the Firebase db
const db = getFirestore(app);

export { db };
