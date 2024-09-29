// // MESSAGE INPUT
// /*const textarea = document.querySelector('.chatbox-message-input')
// const chatboxForm = document.querySelector('.chatbox-message-form')

// textarea.addEventListener('input', function() {
//     let line = textarea.value.split('\n').length

//     if (textarea.rows < 6 || line < 6) {
//         textarea.rows = line
//     }

//     if (textarea.rows > 1) {
//         chatboxForm.style.alignItems = 'flex-end'
//     } else {
//         chatboxForm.style.alignItems = 'center'
//     }
// })



// // TOGGLE CHATBOX
// const chatboxToggle = document.querySelector('.chatbox-toggle')
// const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

// chatboxToggle.addEventListener('click', function() {
//     chatboxMessage.classList.toggle('show')
// })



// // DROPDOWN TOGGLE
// const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
// const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

// dropdownToggle.addEventListener('click', function() {
//     dropdownMenu.classList.toggle('show')
// })

// document.addEventListener('click', function(e) {
//     if (!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
//         dropdownMenu.classList.remove('show')
//     }
// })







// // CHATBOX MESSAGE
// const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
// const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

// chatboxForm.addEventListener('submit', function(e) {
//     e.preventDefault()

//     if (isValid(textarea.value)) {
//         writeMessage()
//         setTimeout(autoReply, 1000)
//     }
// })



// function addZero(num) {
//     return num < 10 ? '0' + num : num
// }

// function writeMessage() {
//     const today = new Date()
//     let message = `
// 		<div class="chatbox-message-item sent">
// 			<span class="chatbox-message-item-text">
// 				${textarea.value.trim().replace(/\n/g, '<br>\n')}
// 			</span>
// 			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
// 		</div>
// 	`
//     chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
//     chatboxForm.style.alignItems = 'center'
//     textarea.rows = 1
//     textarea.focus()
//     textarea.value = ''
//     chatboxNoMessage.style.display = 'none'
//     scrollBottom()
// }



// // 
// //
// document.addEventListener('DOMContentLoaded', function () {
//     displayMessage("Welcome! Ask a question by clicking the buttons.");
// });

// function displayMessage(message) {
//     var chatbox = document.getElementById('chatbox');
//     var messageDiv = document.createElement('div');
//     messageDiv.innerHTML = '<p>' + message + '</p>';
//     chatbox.appendChild(messageDiv);
//     chatbox.scrollTop = chatbox.scrollHeight;
// }

// function askQuestion(questionNumber) {
//     var responses = [
//         "Thanks for your question! Ask me anything else.",
//         "I appreciate your query! Feel free to ask more.",
//         "Thanks for reaching out! Any other questions?",
//         "Great question! If you have more, feel free to ask."
//     ];

//     if (questionNumber >= 1 && questionNumber <= 4) {
//         displayMessage(responses[questionNumber - 1]);
//     } else {
//         displayMessage("Invalid question number.");
//     }
// }
// // 
// // 
// function autoReply() {
//     const today = new Date()
//     let message = `
// 		<div class="chatbox-message-item received">
// 			<span class="chatbox-message-item-text">
// 				Thank you for contacting Us!
//                 Please choose a query:
//                 1. How? 
//                 2. How?
//                 3. How?
//                 4. How?
// 			</span>
// 			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
// 		</div>
// 	`
//     chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
//     scrollBottom()
// }

// function scrollBottom() {
//     chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
// }

// function isValid(value) {
//     let text = value.replace(/\n/g, '')
//     text = text.replace(/\s/g, '')




//     return text.length > 0
// }
// */

// document.addEventListener('DOMContentLoaded', function () {
//     displayMessage("Welcome! Ask a question by clicking the buttons.");
// });

// function displayMessage(message) {
//     var chatbox = document.getElementById('chatbox');
//     var messageDiv = document.createElement('div');
//     messageDiv.innerHTML = '<p>' + message + '</p>';
//     chatbox.appendChild(messageDiv);
//     chatbox.scrollTop = chatbox.scrollHeight;
// }

// function askQuestion(questionNumber) {
//     var responses = [
//         "Thanks for your question! Ask me anything else.",
//         "I appreciate your query! Feel free to ask more.",
//         "Thanks for reaching out! Any other questions?",
//         "Great question! If you have more, feel free to ask."
//     ];

//     if (questionNumber >= 1 && questionNumber <= 4) {
//         displayMessage(responses[questionNumber - 1]);
//     } else {
//         displayMessage("Invalid question number.");
//     }
// }


function openChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
}

function handleButtonClick(questionNumber) {
    const chatBody = document.getElementById('chat-body');
    const responses = [
        "Please visit this website for testing your soil: <br> <u> https://www.kribhco.net/pages/services/soil.html </u> </br> Oh! do you know you can test your own soil using some kits? </br>",
        "You can study about important of NPK and buy different types of fertilizers here: </br> <u>https://jobescompany.com/blog/knowing-npk-your-soil-made-better/ </u></br> or buy at the near by government subsidy store",
        "You can always cultivate the trending crops suitable in your area and use the generalized fertilizer. If your demographic area is rich in red soil then, then you fertilizers containing high concentrations of nitrogen and potassium if your demographic area is rich in black soil then, The range (mean) values of available N, P and K were 106 to 291 (184), 8 to 65 (27) and 145 to 358 (229) kg ha-1",
        "You should always pay a minimum amount of rupees 10,000 to confirm the agreement with farmer. In case of any disagreement Cropwise Companion will return your initial investment back to you."
    ];

    const response = responses[questionNumber - 1];
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>Question ${questionNumber}:</strong> ${response}`;
    chatBody.appendChild(newMessage);
}
