import React, { useContext } from 'react';
import { MessageContext } from '../context/messageContext';

import MessageItem from './MessageItem';

const MessageList = () => {
    const { messages } = useContext(MessageContext);

    return (
        <div style={{ padding: 16 }}>
            {messages && messages.map((message) => <MessageItem key={message._id} message={message} />)}
        </div>
    );
};

export default MessageList;
