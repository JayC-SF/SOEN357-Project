import React from 'react';
import ChatBubble from '../components/chat/ChatBubble';
export default function ChatPage() {
  return (
    <div>
      <h1>Chat Page</h1>
      <p>This is the chat page.</p>
      <ChatBubble content="Hello, how are you?" isUser={true} />
      <ChatBubble content="I'm fine, thank you!" isUser={false} />
    </div>
  );
}
