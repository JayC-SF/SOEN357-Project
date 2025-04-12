import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, CheckCircle2, XCircle, AlertCircle, BarChart3 } from 'lucide-react';

interface ProgressStats {
  completed: number;
  inProgress: number;
  notStarted: number;
  total: number;
}

function ProgressTracker() {
  const navigate = useNavigate();

  // Sample data - in a real app, this would come from your backend
  const stats: ProgressStats = {
    completed: 12,
    inProgress: 5,
    notStarted: 3,
    total: 20
  };

  const recentActivity = [
    {
      id: 1,
      title: "Final Year Project",
      action: "Phase completed",
      phase: "Research & Planning",
      timestamp: "2 hours ago",
      type: "success"
    },
    {
      id: 2,
      title: "Web Development Course",
      action: "New task added",
      phase: "Backend Development",
      timestamp: "5 hours ago",
      type: "info"
    },
    {
      id: 3,
      title: "Machine Learning Project",
      action: "Deadline approaching",
      phase: "Model Training",
      timestamp: "1 day ago",
      type: "warning"
    }
  ];

  // Monthly progress data
  const monthlyProgress = [
    { 
      month: 'Jan',
      completed: 23,
      tasks: [
        { title: "Project Planning", date: "Jan 15" },
        { title: "Research Phase", date: "Jan 28" }
      ]
    },
    { month: 'Feb', completed: 18, tasks: [] },
    { month: 'Mar', completed: 32, tasks: [] },
    { 
      month: 'Apr',
      completed: 27,
      tasks: [
        { title: "Backend Implementation", date: "Apr 10" },
        { title: "UI Design", date: "Apr 22" },
        { title: "Testing Phase", date: "Apr 30" }
      ]
    },
    { month: 'May', completed: 42, tasks: [] },
    { month: 'Jun', completed: 35, tasks: [] }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Total Assignments</h3>
              <BarChart3 className="h-6 w-6 text-indigo-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
            <p className="text-sm text-gray-600 mt-2">Across all projects</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Completed</h3>
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
            <p className="text-sm text-gray-600 mt-2">{Math.round((stats.completed / stats.total) * 100)}% of total</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">In Progress</h3>
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">{stats.inProgress}</p>
            <p className="text-sm text-gray-600 mt-2">{Math.round((stats.inProgress / stats.total) * 100)}% of total</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Not Started</h3>
              <XCircle className="h-6 w-6 text-gray-600" />
            </div>
            <p className="text-3xl font-bold text-gray-600">{stats.notStarted}</p>
            <p className="text-sm text-gray-600 mt-2">{Math.round((stats.notStarted / stats.total) * 100)}% of total</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Monthly Progress</h2>
            <div className="space-y-4">
              {monthlyProgress.map((month) => (
                <div key={month.month} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-indigo-600" />
                      <span className="font-semibold text-gray-900">{month.month}</span>
                    </div>
                    <span className="text-lg font-bold text-indigo-600">{month.completed} tasks</span>
                  </div>
                  {month.tasks.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {month.tasks.map((task, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>{task.title}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{task.date}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-100' :
                    activity.type === 'warning' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    {activity.type === 'success' ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : activity.type === 'warning' ? (
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    ) : (
                      <Clock className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.action} in {activity.phase}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressTracker;