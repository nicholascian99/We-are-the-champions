import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getDatabase, ref, onValue} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';


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



const outputEl = document.querySelector('.message-container')
const publishButton = document.querySelector('.button')
let input = document.querySelector('#textarea')


clearInputEl()









publishButton.addEventListener('click', function(){

    

    if(input.value.trim() ===""){
    
    }else{
    appendEndorsements()
    clearInputEl()
    }
        
})





onValue(commentsInDB, function(snapshot){
    let commentsArray = Object.values(snapshot.val())
    
    for(let i = 0; i < commentsArray.length; i++){
        let currentComment = commentsArray[i]
        appendEndorsements(currentComment)
    }
})




function appendEndorsements(){
    let endorsements = document.createElement('li')
    let inputValue = input.value
    
    endorsements.innerHTML = `${inputValue}`
    endorsements.classList.add('messages')
    outputEl.append(endorsements)

}





function clearInputEl(){
    input.value = ""
}



