
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sendBtn').addEventListener('click', async function() {
        let chatInput = document.getElementById('chatInput');
        let chatDisplay = document.getElementById('chatDisplay');

        if(chatInput.value.trim() !== "") {
            let userMessage = document.createElement('div');
            userMessage.className = 'chat-message user';
            userMessage.innerHTML = "<span class='emoji' style='font-size: 30px;'>👩🏻‍🦰</span> " + chatInput.value;
            chatDisplay.appendChild(userMessage);

            let botMessage = document.createElement('div');
            botMessage.className = 'chat-message bot';

            let botResponse = await getBotResponse(chatInput.value);
            botMessage.innerHTML = "<span class='emoji' style='font-size: 24px;'>🐧</span> " + botResponse;
            chatDisplay.appendChild(botMessage);

            chatDisplay.scrollTop = chatDisplay.scrollHeight;

            chatInput.value = "";
        }
    });

    async function getBotResponse(message) {
        try {
            let response = await fetch('/generate-response', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            });
            let data = await response.json();
            return data.bot_response;
        } catch (error) {
            console.error('Error:', error);
            return "Sorry, something went wrong!";
        }
    }
});
