import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import {getDatabase } from from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';

const app = initializeApp(firebaseConfig)
const dataBase = getDatabase(app)
const commentsInDB = ref(dataBase, 'Comments')