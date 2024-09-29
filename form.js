// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCXjfcS6RbyYjegSdsKGCJxGh7XoyU-B30",
    authDomain: "profile-af674.firebaseapp.com",
    databaseURL: "https://profile-af674-default-rtdb.firebaseio.com",
    projectId: "profile-af674",
    storageBucket: "profile-af674.appspot.com",
    messagingSenderId: "860417116568",
    appId: "1:860417116568:web:70cf3903a21b6ec6e643ed"
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Reference to the details form
const detailsForm = document.getElementById('details-form');

// Submit event listener for the form
detailsForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    
    // Get user details from the form
    const date = detailsForm['date'].value;
    
    // Save details to Firestore
    db.collection("userDetails").add({
        date: date,  // Save the date under the correct field name
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Details submitted successfully!");
      
        // Construct URL for data.html with parameters
        const url = `data.html?date=${date}`;
      
        // Redirect to data.html with constructed URL
        window.location.href = url;
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error occurred while submitting details. Please try again.");
    });
});
