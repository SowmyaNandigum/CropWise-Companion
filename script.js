function openChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
}

function handleButtonClick(questionNumber) {
    const chatBody = document.getElementById('chat-body');
    const responses = [
        " Please visit this website for testing your soil. https://www.kribhco.net/pages/services/soil.html Oh! do you know you can test your own soil using some kits?",
        "You can study about important of NPK and buy different types of fertilizers here https://jobescompany.com/blog/knowing-npk-your-soil-made-better/ or buy at the near by government subsidy store",
        "Answer to Question 3",
        "Answer to Question 4"
    ];

    const response = responses[questionNumber - 1];
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>Question ${questionNumber}:</strong> ${response}`;
    chatBody.appendChild(newMessage);
}
