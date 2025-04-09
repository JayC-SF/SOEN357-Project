import { Send } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';

export default function ChatInput() {
  return (
    <div className="m-2 rounded-lg border border-gray-300 focus-within:border-primary-normal focus-within:ring-2 focus-within:ring-primary-normal transition">
      <div>
        <input
          type="text"
          placeholder="Type your message here..."
          className="w-full p-2 rounded-lg outline-none"
        />
      </div>
      <div className="flex flex-row justify-between items-center p-2">
        <button>
          <AddIcon sx={{ color: '#5442da' }} />
        </button>
        <button className="bg-primary-normal text-white p-2 rounded-xl ml-2">
          <Send />
        </button>
      </div>
    </div>
  );
}
