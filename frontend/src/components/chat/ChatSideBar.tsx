import AddIcon from '@mui/icons-material/Add';
export default function ChatSideBar() {
  return (
    <div className="flex flex-col  bg-gray-100 border-r border-gray-300 h-screen">
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <h2 className="text-lg font-semibold">Chat List</h2>
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <AddIcon />
        </button>
      </div>
      <div className="flex flex-col p-4 overflow-y-auto">{/* Chat list items will go here */}</div>
    </div>
  );
}
