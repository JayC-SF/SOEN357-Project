import { Phase } from '../../interfaces/BackendResponse';
import { Close } from '@mui/icons-material';
export default function ChatPhaseModal({ phase, close }: { phase: Phase; close: () => void }) {
  return (
    <div>
      <div className="absolute top-4 right-4">
        <Close className="cursor-pointer" onClick={close} />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="bg-primary-normal text-white p-4 m-2 rounded-full">
          {new Date(phase.deadline).toLocaleDateString()}
        </h2>
        <h1 className="text-2xl font-bold mb-4">{phase.title}</h1>
        <p className="text-lg mb-4">{phase.description}</p>
        <h2 className="text-xl font-semibold mb-2">Tasks</h2>
        <ul className="list-disc list-inside">
          {phase.tasks.map((task, index) => (
            <li key={index} className="mb-2">
              <span
                className={`font-semibold ${task.status === 'completed' ? 'text-green-500' : 'text-red-500'}`}
              >
                {task.description} ({task.status})
              </span>
              <span
                className={`ml-2 text-sm ${task.priority === 'high' ? 'text-red-500' : task.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'}`}
              >
                Priority: {task.priority}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
