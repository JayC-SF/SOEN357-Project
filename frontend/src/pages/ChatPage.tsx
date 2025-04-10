import { useState } from 'react';
import ChatBubble from '../components/chat/ChatBubble';
import ChatInput from '../components/chat/ChatInput';
import ChatSideBar from '../components/chat/ChatSideBar';
import ChatHeader from '../components/chat/ChatHeader';
import { BackendResponse } from '../interfaces/BackendResponse';
import ChatTaskBreakdown from '../components/chat/ChatTaskBreakdown';
import Message from '../interfaces/Message';
import LoadingSpinner from '../components/LoadingSpinner';
export default function ChatPage() {
  const [response, setResponse] = useState<BackendResponse>([]);
  const [isLoading, setIsLoading] = useState(false); // Set to false initially
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchResponse = async ({ message }: { message: string }): Promise<BackendResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate delay
    const result = [
      {
        title: 'Research Phase',
        description: 'Gather information and requirements for the assignment.',
        startDate: '2025-04-01T00:00:00Z',
        deadline: '2025-04-05T00:00:00Z',
        status: 'completed',
        tasks: [
          {
            description: 'Read assignment guidelines',
            status: 'completed',
            priority: 'high',
          },
          {
            description: 'Search for academic sources',
            status: 'completed',
            priority: 'medium',
          },
          {
            description: 'Summarize key points',
            status: 'completed',
            priority: 'medium',
          },
        ],
      },
      {
        title: 'Planning Phase',
        description: 'Outline the structure and plan individual sections.',
        startDate: '2025-04-06T00:00:00Z',
        deadline: '2025-04-08T00:00:00Z',
        status: 'in-progress',
        tasks: [
          {
            description: 'Create outline',
            status: 'completed',
            priority: 'high',
          },
          {
            description: 'Distribute tasks among team members',
            status: 'in-progress',
            priority: 'medium',
          },
          {
            description: 'Set up shared document',
            status: 'not-started',
            priority: 'low',
          },
        ],
      },
      {
        title: 'Writing Phase',
        description: 'Write the first draft of the assignment.',
        startDate: '2025-04-09T00:00:00Z',
        deadline: '2025-04-15T00:00:00Z',
        status: 'not-started',
        tasks: [
          {
            description: 'Write introduction',
            status: 'not-started',
            priority: 'high',
          },
          {
            description: 'Write body paragraphs',
            status: 'not-started',
            priority: 'high',
          },
          {
            description: 'Write conclusion',
            status: 'not-started',
            priority: 'medium',
          },
        ],
      },
      {
        title: 'Review & Submission',
        description: 'Proofread and submit the assignment.',
        startDate: '2025-04-16T00:00:00Z',
        deadline: '2025-04-17T00:00:00Z',
        status: 'not-started',
        tasks: [
          {
            description: 'Proofread for grammar',
            status: 'not-started',
            priority: 'medium',
          },
          {
            description: 'Check formatting and citations',
            status: 'not-started',
            priority: 'low',
          },
          {
            description: 'Submit via course portal',
            status: 'not-started',
            priority: 'high',
          },
        ],
      },
    ];
    return result as BackendResponse;
  };

  const sendMessage = async (message: string) => {
    if (message.trim() === '') return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message, isUser: true, timestamp: new Date() },
    ]);
    setIsLoading(true);
    const result = await fetchResponse({ message });
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: result, isUser: false, timestamp: new Date() },
    ]);
    setIsLoading(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-y-hidden">
      {/* Header */}
      <div className="flex-shrink-0">
        <ChatHeader />
      </div>

      {/* Main Content */}
      <div className="flex flex-row flex-grow min-h-0">
        {/* Sidebar */}
        <div className="w-1/6 bg-primary-normal">
          <ChatSideBar />
        </div>

        {/* Chat Area */}
        <div className="flex flex-col w-5/6">
          {/* Chat Bubbles */}
          <div className="flex-grow p-4 bg-gray-100 border-t border-gray-300 overflow-y-auto">
            {messages.map((message, index) => {
              if (message.isUser && typeof message.content === 'string') {
                return <ChatBubble key={index} content={message.content} isUser={true} />;
              } else if (!message.isUser && Array.isArray(message.content)) {
                return <ChatTaskBreakdown phases={message.content} key={index} />;
              }
              return null; // Handle unexpected cases gracefully
            })}
            {isLoading && <LoadingSpinner />}
          </div>

          {/* Chat Input */}
          <div className="p-2 bg-white border-t border-gray-300 flex-shrink-0">
            <ChatInput sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}
