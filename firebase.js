import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBH3am-RF2fNLJ5T7cd5EtUQwUqxS0K6Y",
    authDomain: "building-3241.firebaseapp.com",
    databaseURL: "https://building-3241-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "building-3241",
    storageBucket: "building-3241.firebasestorage.app",
    messagingSenderId: "1038336827611",
    appId: "1:1038336827611:web:3b922b006841009b9d2cfe"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };