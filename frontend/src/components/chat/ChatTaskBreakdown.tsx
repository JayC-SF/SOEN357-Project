import { BackendResponse, Phase } from '../../interfaces/BackendResponse';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Modal from 'react-modal';
import { useState } from 'react';
import ChatPhaseModal from './ChatPhaseModal';
export default function ChatTaskBreakdown({ phases }: { phases: BackendResponse }) {
  Modal.setAppElement('#root');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  const handlePhaseClick = (phase: Phase) => {
    setSelectedPhase(phase);
    setIsOpen(true);
  };
  return (
    <div className="flex flex-row justify-start mb-4">
      <div className="flex items-center mr-2">
        <AccountCircleIcon />
      </div>
      <div className="rounded-lg text-lg p-4 w-[calc(100%-3.5em)] bg-primary-light-active text-[#1B2559]">
        <h1 className="font-bold text-center mb-4">Assignment Tasks Checklist</h1>
        <div className="flex flex-col items-center">
          {phases.map((phase, index) => (
            <div
              className="flex flex-col items-center justify-center mb-4 border-b-2 border-b-white p-4 w-2/3"
              key={index}
            >
              <div className="flex flex-row justify-between items-center w-full">
                <h3
                  className="text-gray-600 underline text-center hover:text-gray-800"
                  onClick={() => handlePhaseClick(phase)}
                >
                  {phase.title}
                </h3>
                <div className="flex flex-row items-center gap-2">
                  <h3 className="bg-primary-normal text-white p-2 rounded-full">
                    {new Date(phase.deadline).toLocaleDateString()}
                  </h3>
                  <input
                    type="checkbox"
                    className="ml-2 w-5 h-5 scale-115 accent-primary-normal"
                    checked={phase.status === 'completed'}
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-end gap-2 mt-2">
          <ThumbUp />
          <ThumbDown />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        className="w-1/2 mx-auto bg-white rounded-3xl p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
        onRequestClose={() => setIsOpen(false)}
      >
        <ChatPhaseModal phase={selectedPhase!} close={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}
