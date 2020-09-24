import React, { useContext } from 'react';
import { MessageContext } from '../context/messageContext';

import MessageItem from './MessageItem';

const MessageList = () => {
    const { messages } = useContext(MessageContext);

    // console.log('MESSAGE LIST RENDER', messages);
    return (
        <div style={{ padding: '16px 8px 0 16px' }}>
            {messages && messages.map((message) => <MessageItem key={message._id} message={message} />)}
        </div>
    );
};

export default MessageList;
