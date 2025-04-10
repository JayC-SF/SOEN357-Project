import { BackendResponse } from '../../../interfaces/BackendResponse';

export default function ChatTaskBreakdown({ phases }: { phases: BackendResponse }) {
  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Objectives</h2>
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="rounded-lg border bg-white shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-primary-normal">{phase.title}</h3>
              <div className="text-sm text-gray-500">
                {new Date(phase.startDate).toLocaleDateString()} -{' '}
                {new Date(phase.deadline).toLocaleDateString()}
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div
                className={`h-4 rounded-full ${
                  phase.status === 'completed'
                    ? 'bg-green-500'
                    : phase.status === 'in-progress'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                }`}
                style={{
                  width:
                    phase.status === 'completed'
                      ? '100%'
                      : phase.status === 'in-progress'
                        ? '50%'
                        : '0%',
                }}
              ></div>
            </div>

            <div className="space-y-2">
              {phase.tasks.map((task, taskIndex) => {
                const taskPriority =
                  task.priority === 'low'
                    ? 'bg-green-100'
                    : task.priority === 'medium'
                      ? 'bg-yellow-100'
                      : 'bg-red-100';
                return (
                  <div
                    key={taskIndex}
                    className={`flex items-center justify-between p-2 ${taskPriority} rounded-lg`}
                  >
                    <div>
                      <p className="font-medium">{task.description}</p>
                      <p className="text-sm text-gray-500">Priority: {task.priority}</p>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-primary-normal"
                        defaultChecked={task.status === 'completed'}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
