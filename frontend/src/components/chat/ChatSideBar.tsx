import AddIcon from '@mui/icons-material/Add';
export default function ChatSideBar() {
  return (
    <div className="flex flex-col items-center bg-transparent h-screen">
      <div className=" p-8 ">
        <button className="p-2  bg-white w-72 h-14 rounded-full">
          <AddIcon /> New Chat
        </button>
      </div>
      <div className="flex flex-col p-4 overflow-y-auto">{/* Chat list items will go here */}</div>
    </div>
  );
}
