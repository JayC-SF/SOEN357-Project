import React from 'react';
import ChatBubble from '../components/chat/ChatBubble';
import ChatInput from '../components/chat/ChatInput';
import ChatSideBar from '../components/chat/ChatSideBar';
import ChatHeader from '../components/chat/ChatHeader';
export default function ChatPage() {
  return (
    <div>
      <div>
        <ChatHeader />
      </div>
      <div className="flex flex-row">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-200">
          <ChatSideBar />
        </div>

        {/* Chat Area */}
        <div className="flex flex-col w-3/4">
          {/* Chat Bubbles */}
          <div className="flex-grow p-4 bg-gray-100 border-t border-gray-300 overflow-y-scroll">
            <ChatBubble content="Hello, how are you?" isUser={true} />
            <ChatBubble content="I'm fine, thank you!" isUser={false} />
          </div>

          {/* Chat Input */}
          <div className="p-2 bg-white border-t border-gray-300">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
}
