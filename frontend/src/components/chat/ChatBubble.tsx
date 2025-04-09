import { ThumbUp } from '@mui/icons-material';
import { ThumbDown } from '@mui/icons-material';
import { Edit } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function ChatBubble({ content, isUser }: { content: string; isUser: boolean }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="flex items-center mr-2">
          <AccountCircleIcon />
        </div>
      )}
      <div
        className={`rounded-lg  text-lg p-4 w-[calc(100%-3.5em)] ${isUser ? 'bg-primary-light text-black border-primary-light-active border-2' : 'bg-primary-light-active text-[#1B2559]'}`}
      >
        {content}
        {isUser ? (
          <div className="flex flex-row justify-end gap-2 mt-2">
            <Edit />
          </div>
        ) : (
          <div className="flex flex-row justify-end gap-2 mt-2">
            <ThumbUp />
            <ThumbDown />
          </div>
        )}
      </div>
      {isUser && (
        <div className="flex items-center ml-2">
          <AccountCircleIcon />
        </div>
      )}
    </div>
  );
}
