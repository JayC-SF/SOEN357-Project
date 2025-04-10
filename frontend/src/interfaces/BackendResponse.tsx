interface Task {
  description: string;
  status: 'in-progress' | 'completed' | 'not-started';
  priority: 'low' | 'medium' | 'high';
}

interface Phase {
  title: string;
  description: string;
  startDate: string;
  deadline: string;
  status: 'in-progress' | 'completed' | 'not-started';
  tasks: Task[];
}

export type BackendResponse = Phase[];
