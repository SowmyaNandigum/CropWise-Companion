// formdata.js
import { db } from './firebase.js'; // Adjust the path as necessary
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"; // Import necessary Firestore functions

const formData = document.querySelector('.form-data');

function createFormData(doc) {
    let div = document.createElement("DIV");
    let date = document.createElement("span");

    div.classList.add("form-info");

    date.textContent = doc.data().date;

    div.appendChild(date);
    formData.appendChild(div);
}

// Fetching data from Firestore
async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "form-data")); // Use getDocs and collection
    querySnapshot.forEach((doc) => {
        console.log(doc.data());  // Check the fetched data in the console
        createFormData(doc);
    });
}

// Call the fetchData function to retrieve the documents
fetchData().catch((error) => {
    console.error("Error fetching data: ", error);
});
