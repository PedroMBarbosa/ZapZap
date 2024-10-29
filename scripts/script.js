const socket = io();

        document.getElementById('sendButton').addEventListener('click', () => {
            const message = document.getElementById('messageInput').value;
            socket.emit('chat message', message);
            document.getElementById('messageInput').value = '';
        });

        socket.on('chat message', function(msg){
            const messagesDiv = document.getElementById('messages');
            const messageElem = document.createElement('div');
            messageElem.className = 'message other';
            messageElem.textContent = msg;
            messagesDiv.appendChild(messageElem);
        });