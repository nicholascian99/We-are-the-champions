import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getDatabase, ref, onValue, push} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';


const firebaseConfig = {
    apiKey: "AIzaSyCybPbrYOVAOACO3GvqlbHO_4-9EVso_Ys",
    authDomain: "we-are-the-champions-40fa8.firebaseapp.com",
    databaseURL: "https://we-are-the-champions-40fa8-default-rtdb.firebaseio.com",
    projectId: "we-are-the-champions-40fa8",
    storageBucket: "we-are-the-champions-40fa8.appspot.com",
    messagingSenderId: "810118891121",
    appId: "1:810118891121:web:cbd10b5ae42a05229d7dd0"
};


const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const commentsInDB = ref(database, "Comments")



const outputEl = document.querySelector('.message-container')
const publishButton = document.querySelector('.button')
const input = document.querySelector('#textarea')


clearInputEl()







// when clicked, trim the input to equal an empty space, then, if it's not empty, run the functions that
//will append the input into the list, and then clear the input field

// publishButton.addEventListener('click', function(){
    
    
    
//     if(input.value.trim() ===""){
        
//     }else{

        //takes a snapshot of the data in the database, which here, is the comments in the database
//this then will append the Endorsements with the current comment as the perimeter

onValue(commentsInDB, function(snapshot){
    // let commentsArray = Object.values(snapshot.val())

    console.log(snapshot.val())
    
            // for(let i = 0; i < commentsArray.length; i++){
            //     let currentComment = commentsArray[i]
            //     appendEndorsements(currentComment)
            //     clearInputEl()
            })
        // })
//     }
        
// })





//create an li element with text from the input value and append it to the ul 

function appendEndorsements(comment){
    let endorsements = document.createElement('li')
    
    endorsements.innerHTML = `${comment}`
    endorsements.classList.add('messages')
    outputEl.append(endorsements)

}



//clear the input element

function clearInputEl(){
    input.value = ""
}



