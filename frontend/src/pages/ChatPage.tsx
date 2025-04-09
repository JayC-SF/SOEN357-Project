import React from 'react';
import ChatBubble from '../components/chat/ChatBubble';
import ChatInput from '../components/chat/ChatInput';
import ChatSideBar from '../components/chat/ChatSideBar';
import ChatHeader from '../components/chat/ChatHeader';
export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col overflow-y-hidden">
      {/* Header */}
      <div className="flex-shrink-0">
        <ChatHeader />
      </div>

      {/* Main Content */}
      <div className="flex flex-row flex-grow min-h-0">
        {/* Sidebar */}
        <div className="w-1/4 bg-primary-normal">
          <ChatSideBar />
        </div>

        {/* Chat Area */}
        <div className="flex flex-col w-3/4">
          {/* Chat Bubbles */}
          <div className="flex-grow p-4 bg-gray-100 border-t border-gray-300 overflow-y-auto">
            <ChatBubble content="Hello, how are you?" isUser={true} />
            <ChatBubble content="I'm fine, thank you!" isUser={false} />
          </div>

          {/* Chat Input */}
          <div className="p-2 bg-white border-t border-gray-300 flex-shrink-0">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
}
