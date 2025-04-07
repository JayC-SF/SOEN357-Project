export default function ChatBubble({ content, isUser }: { content: string; isUser: boolean }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`rounded-lg p-2 max-w-xs ${isUser ? 'bg-primary-light text-black' : 'bg-primary-light-active text-[#1B2559]'}`}
      >
        {content}
      </div>
    </div>
  );
}
