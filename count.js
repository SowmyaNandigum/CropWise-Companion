const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('done');

let count = 0;

// Function to update count display
function updateCountDisplay() {
  countDisplay.textContent = count;
}

// Function to increase count
function increaseCount() {
  count++;
  updateCountDisplay();
  // Update count in Firestore
  
}

// Add event listener to the button
increaseBtn.addEventListener('click', increaseCount);

// // Listen for changes in count from Firestore
// db.collection('counts').doc('main').onSnapshot(doc => {
//   const data = doc.data();
//   if (data) {
//     count = data.count;
//     updateCountDisplay();
//   }
// });
