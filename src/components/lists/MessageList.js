import React, { useContext } from 'react';
import { MessageContext } from '../context/messageContext';
const MessageList = () => {
    const { messages } = useContext(MessageContext);
    if (messages) console.log('message list', messages);
    return (
        <div>
            <h1>Messages</h1>
            {messages &&
                messages.map((message) => (
                    <p key={message._id}>
                        <span>{message.from.name}</span>': ' {message.message}
                    </p>
                ))}
        </div>
    );
};

export default MessageList;
