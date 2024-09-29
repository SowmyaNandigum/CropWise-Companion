import { db } from './firebase.js'; // Adjust the path as necessary
import { collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const modalWrap = document.querySelector(".modal-wrap");
const modalContent = document.querySelector(".modal-content");
const modalBtn = document.querySelector(".modal-btn");
const cancel = document.querySelector(".cancel");
const dateInput = document.getElementById("date-input");
const errorDate = document.querySelector(".date-error");

const firebaseData = collection(db, "form-data");  // Reference to the Firestore collection
const accept = document.querySelector(".accept");

function closeModal() {
    modalContent.classList.add("slide-out");
    setTimeout(() => {
        modalWrap.classList.toggle("display-none");
    }, 650);
    dateInput.value = "";  // Clear the date input field
}

modalBtn.addEventListener("click", () => {
    modalContent.classList.remove("slide-out");
    modalWrap.classList.toggle("display-none");
});

accept.addEventListener('click', async () => { // Make this async to handle Firestore
    const dateValue = dateInput.value;

    // Basic validation: Check if a date is selected
    if (dateValue === "") {
        errorDate.classList.remove("display-none");  // Show the error message
    } else {
        errorDate.classList.add("display-none");  // Hide the error message if valid

        // Save the selected date to Firestore
        await setDoc(doc(firebaseData), {  // Save the date field
            date: dateValue
        })
        .then(() => {
            console.log("Date added successfully!");
            alert("Date added successfully!");
            closeModal();  // Close the modal after successfully adding the data
        })
        .catch((error) => {
            console.error("Error adding date: ", error);
            alert("Error occurred while submitting the date.");
        });
    }
});

cancel.addEventListener("click", () => {
    closeModal();
});
