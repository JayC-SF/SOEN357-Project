import { useState } from 'react';
import { CheckCircle2, PlusCircle, ChevronRight, MoreVertical, Calendar, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface Phase {
  id: number;
  title: string;
  description: string;
  progress: number;
  startDate: Date;
  endDate: Date;
  tasks: Task[];
}

interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: 'In Progress' | 'Completed' | 'Not Started';
  progress: number;
  phases: Phase[];
}

function Dashboard() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: "Final Year Project",
      description: "Research and implementation of machine learning algorithms",
      dueDate: new Date(2025, 5, 30),
      status: 'In Progress',
      progress: 45,
      phases: [
        {
          id: 1,
          title: "Research & Planning",
          description: "Literature review and project planning",
          progress: 100,
          startDate: new Date(2025, 2, 1),
          endDate: new Date(2025, 2, 15),
          tasks: [
            { id: 1, title: "Review existing literature", completed: true },
            { id: 2, title: "Define project scope", completed: true },
            { id: 3, title: "Create project timeline", completed: true }
          ]
        },
        {
          id: 2,
          title: "Implementation",
          description: "Develop core algorithms",
          progress: 30,
          startDate: new Date(2025, 2, 16),
          endDate: new Date(2025, 3, 15),
          tasks: [
            { id: 1, title: "Set up development environment", completed: true },
            { id: 2, title: "Implement base algorithms", completed: false },
            { id: 3, title: "Create test cases", completed: false }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Web Development Course",
      description: "Complete online course on full-stack development",
      dueDate: new Date(2025, 4, 15),
      status: 'In Progress',
      progress: 65,
      phases: [
        {
          id: 1,
          title: "Frontend Basics",
          description: "Learn HTML, CSS, and JavaScript",
          progress: 100,
          startDate: new Date(2025, 2, 1),
          endDate: new Date(2025, 2, 15),
          tasks: [
            { id: 1, title: "Complete HTML modules", completed: true },
            { id: 2, title: "Complete CSS modules", completed: true },
            { id: 3, title: "Complete JavaScript basics", completed: true }
          ]
        },
        {
          id: 2,
          title: "Backend Development",
          description: "Learn Node.js and databases",
          progress: 30,
          startDate: new Date(2025, 2, 16),
          endDate: new Date(2025, 3, 15),
          tasks: [
            { id: 1, title: "Learn Node.js basics", completed: true },
            { id: 2, title: "Study database concepts", completed: false },
            { id: 3, title: "Build sample API", completed: false }
          ]
        }
      ]
    }
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(assignments[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleTask = (phaseId: number, taskId: number) => {
    if (!selectedAssignment) return;

    const updatedAssignments = assignments.map(assignment => {
      if (assignment.id === selectedAssignment.id) {
        const updatedPhases = assignment.phases.map(phase => {
          if (phase.id === phaseId) {
            const updatedTasks = phase.tasks.map(task =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            );
            const progress = Math.round((updatedTasks.filter(t => t.completed).length / updatedTasks.length) * 100);
            return { ...phase, tasks: updatedTasks, progress };
          }
          return phase;
        });

        // Calculate overall assignment progress
        const totalProgress = Math.round(
          updatedPhases.reduce((acc, phase) => acc + phase.progress, 0) / updatedPhases.length
        );

        const updatedAssignment = { ...assignment, phases: updatedPhases, progress: totalProgress };
        // Update selected assignment
        setSelectedAssignment(updatedAssignment);
        return updatedAssignment;
      }
      return assignment;
    });

    setAssignments(updatedAssignments);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDurationInDays = (startDate: Date, endDate: Date) => {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const filteredAssignments = assignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Assignments</h1>
          <p className="text-gray-600">Track your progress across all assignments</p>
        </div>
        <Link
          to="/new-assignment"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
        >
          <PlusCircle className="h-5 w-5" />
          New Assignment
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Assignments List */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search assignments..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className={`p-4 cursor-pointer transition hover:bg-gray-50 ${selectedAssignment?.id === assignment.id ? 'bg-indigo-50' : ''
                  }`}
                onClick={() => setSelectedAssignment(assignment)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${assignment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      assignment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                    }`}>
                    {assignment.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{assignment.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Due {formatDate(assignment.dueDate)}</span>
                  </div>
                  <span className="text-indigo-600 font-medium">{assignment.progress}%</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${assignment.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phases Grid */}
        <div className="col-span-12 md:col-span-8">
          {selectedAssignment ? (
            <div className="grid md:grid-cols-2 gap-6">
              {selectedAssignment.phases.map((phase) => (
                <div key={phase.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                        <p className="text-sm text-gray-600">{phase.description}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(phase.startDate)} - {formatDate(phase.endDate)}</span>
                      <span className="text-indigo-600 font-medium">
                        ({getDurationInDays(phase.startDate, phase.endDate)} days)
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-900 font-medium">{phase.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${phase.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {phase.tasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition cursor-pointer"
                          onClick={() => toggleTask(phase.id, task.id)}
                        >
                          <div className={`flex-shrink-0 w-5 h-5 border-2 rounded-full flex items-center justify-center ${task.completed
                              ? 'bg-indigo-600 border-indigo-600'
                              : 'border-gray-300'
                            }`}>
                            {task.completed && <CheckCircle2 className="h-4 w-4 text-white" />}
                          </div>
                          <span className={`flex-grow text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700'
                            }`}>
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 p-4">
                    <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                      View Details
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select an assignment to view its phases</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;