

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