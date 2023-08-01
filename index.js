import {db} from "./firebase.mjs"
import {collection, addDoc,onSnapshot,doc, deleteDoc,updateDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const btn = document.getElementById("add")
btn.addEventListener('click',async()=>{
const text = document.getElementById("text").value;
    try {
        const docRef = await addDoc(collection(db, "list"), {
          
            text : text
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

})


function show(){
const show = document.getElementById("show")

const q = collection(db, "list")
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
   
show.innerHTML+=`

<div>

    <div >
        <p style="width: 200px;height: 30px;border: 1px solid black;display:Flex;justify-content: center;align-items: center;">${change.doc.data().text}</p>
        <button style="background-color: black;" onclick="del('${change.doc.id}')"><i style="color: white;margin-top: 3px;margin-bottom: 3px;" class="fa-solid fa-trash-can"></i></button>
        <button style="background-color: black;" onclick="edit('${change.doc.id}')"><i style="color: white;margin-top: 3px;margin-bottom: 3px;" class="fa-regular fa-pen-to-square"></i></button>
    </div>
</div>

`

  });
});


}
show()


async function del(id){
    console.log(id);
    await deleteDoc(doc(db, "list", id));
    window.location.reload();
}
window.del=del;


async function edit(id){
    const text =prompt("enter edit text")
    const washingtonRef = doc(db, "list", id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      text:text
    });
window.location.reload();
}

window.edit = edit;