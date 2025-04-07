import React from 'react';
import ChatBubble from '../components/chat/ChatBubble';
import ChatInput from '../components/chat/ChatInput';
export default function ChatPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col p-4 bg-gray-100 border-t border-gray-300 h-[calc(100vh-120px)] overflow-y-auto">
          <ChatBubble content="Hello, how are you?" isUser={true} />
          <ChatBubble content="I'm fine, thank you!" isUser={false} />
        </div>
      </div>
      <div>
        <ChatInput />
      </div>
    </>
  );
}
