import { Send } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { BackendResponse } from '../../interfaces/BackendResponse';
export default function ChatInput({
  sendMessage,
}: {
  sendMessage: (item: string) => Promise<void>;
}) {
  const [message, setMessage] = useState('');

  return (
    <div className="m-2 rounded-lg border border-gray-300 focus-within:border-primary-normal focus-within:ring-2 focus-within:ring-primary-normal transition">
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage(message);
            }
          }}
          placeholder="Type your message here..."
          className="w-full p-2 rounded-lg outline-none"
        />
      </div>
      <div className="flex flex-row justify-between items-center p-2">
        <button>
          <AddIcon sx={{ color: '#5442da' }} />
        </button>
        <button
          onClick={() => sendMessage(message)}
          className="bg-primary-normal text-white p-2 rounded-xl ml-2"
        >
          <Send />
        </button>
      </div>
    </div>
  );
}
