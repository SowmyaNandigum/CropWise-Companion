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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Reference to the container where user details will be displayed
const userDetailsContainer = document.getElementById('user-details-container');

// Fetch user details from Firestore
db.collection("userDetails").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const userDetails = doc.data();
        // Create HTML elements to display user details
        const userDetailsHTML = `
            <div>
                <p>Date: ${userDetails.name}</p>
                
            </div>
        `;
        // Append HTML to the container
        userDetailsContainer.innerHTML += userDetailsHTML;
    });
});
