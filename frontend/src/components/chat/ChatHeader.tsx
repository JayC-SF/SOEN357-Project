import { useNavigate } from 'react-router';

export default function ChatHeader() {
  const navigate = useNavigate();
  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-[#2D2374]">
      <h2
        className="text-lg text-white cursor-pointer"
        onClick={handleTitleClick} // Added onClick to make the title clickable
      >
        <span className="font-bold">MOMEMTUM</span> ASSISTANT
      </h2>
    </div>
  );
}
