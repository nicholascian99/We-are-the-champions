import { initializeApp } from "firebase/app"
import { getDatabase, ref } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCjqXLXnVZNfnQu1aSnpP4GXxkfrZY-Ep4",
    authDomain: "we-are-the-champions-2f47f.firebaseapp.com",
    databaseURL: "https://we-are-the-champions-2f47f-default-rtdb.firebaseio.com",
    projectId: "we-are-the-champions-2f47f",
    storageBucket: "we-are-the-champions-2f47f.appspot.com",
    messagingSenderId: "519804551298",
    appId: "1:519804551298:web:9abc3a6c9e793b31dc349b"
};


const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const commentsInDB = ref(database, "Comments")

console.log(commentsInDB)







const textArea = document.querySelector('#textarea')

textArea.textContent = ""

