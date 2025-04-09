import AddIcon from '@mui/icons-material/Add';
export default function ChatSideBar() {
  return (
    <div className="flex flex-col items-center border-r border-gray-300 h-screen">
      <div className=" p-8 bg-gray-200">
        <button className="p-2  bg-white rounded-full">
          <AddIcon /> New Chat
        </button>
      </div>
      <div className="flex flex-col p-4 overflow-y-auto">{/* Chat list items will go here */}</div>
    </div>
  );
}
