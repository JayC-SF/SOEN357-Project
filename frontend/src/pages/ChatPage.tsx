import React from 'react';
import ChatBubble from '../components/chat/ChatBubble';
import ChatInput from '../components/chat/ChatInput';
import ChatSideBar from '../components/chat/ChatSideBar';
import ChatHeader from '../components/chat/ChatHeader';
import { BackendResponse } from '../interfaces/BackendResponse';
import ChatTaskBreakdown from '../components/chat/ChatTaskBreakdown/ChatTaskBreakdown';
import { useState, useEffect } from 'react';
export default function ChatPage() {
  const [response, setResponse] = useState<BackendResponse>([]);
  useEffect(() => {
    setResponse([
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
    ]);
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-y-hidden">
      <div className="flex-shrink-0">
        <ChatHeader />
      </div>

      <div className="flex flex-row flex-grow min-h-0">
        <div className="w-1/4 bg-primary-normal">
          <ChatSideBar />
        </div>

        <div className="flex flex-col w-3/4">
          <div className="flex-grow p-4 bg-gray-100 border-t border-gray-300 overflow-y-auto">
            <ChatBubble content="Hello, how are you?" isUser={true} />
            <ChatTaskBreakdown phases={response} />
          </div>

          <div className="p-2 bg-white border-t border-gray-300 flex-shrink-0">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
}
