import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

 const firebaseConfig = {
   apiKey: "AIzaSyDksbPq3prIDNHfXIgCKFKn3iMFfG9A574",
   authDomain: "new-todo-8c9fa.firebaseapp.com",
   databaseURL: "https://new-todo-8c9fa-default-rtdb.firebaseio.com",
   projectId: "new-todo-8c9fa",
   storageBucket: "new-todo-8c9fa.appspot.com",
   messagingSenderId: "124663235919",
   appId: "1:124663235919:web:2f2bb9f0b8a2e781b4713a"
 };


 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);