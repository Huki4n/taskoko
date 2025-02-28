import { IColumn } from '@/entities/column'

export const mockColumns: IColumn[] = [
  {
    id: 'column-1',
    name: 'To Do',
    color: '#9d66d5',
    tasks: [
      {
        id: 'task-1',
        name: 'Setup project repository',
        type: 'development',
        description:
          'Initialize Git repository and set up the project structure.',
        tags: ['setup', 'backend'],
        timer: '00:00',
        image: '',
        subtasks: [],
        attachments: [],
        comments: [],
        isDone: false,
        users: [
          { id: 'user-1', name: 'Alice', avatar_url: '' },
        ],
      },
      {
        id: 'task-2',
        name: 'Design login page',
        type: 'design',
        description:
          'Create a wireframe for the login page.',
        tags: ['design', 'UI'],
        timer: '00:00',
        image: '',
        subtasks: [],
        attachments: [],
        comments: [],
        isDone: false,
        users: [
          { id: 'user-2', name: 'Bob', avatar_url: '' },
        ],
      },
    ],
  },
  {
    id: 'column-2',
    name: 'In Work',
    color: '#3361ff',
    tasks: [
      {
        id: 'task-3',
        name: 'Develop authentication logic',
        type: 'backend',
        description:
          'Implement JWT authentication in the backend.',
        tags: ['auth', 'backend'],
        timer: '02:30',
        image: '',
        subtasks: [],
        attachments: [],
        comments: [],
        isDone: false,
        users: [
          { id: 'user-3', name: 'Charlie', avatar_url: '' },
        ],
      },
      {
        id: 'task-4',
        name: 'Create database schema',
        type: 'database',
        description:
          'Define the database schema for users and tasks.',
        tags: ['database', 'schema'],
        timer: '01:15',
        image: '',
        subtasks: [],
        attachments: [],
        comments: [],
        isDone: false,
        users: [
          { id: 'user-4', name: 'David', avatar_url: '' },
        ],
      },
    ],
  },
  {
    id: 'column-3',
    name: 'Review',
    color: '#ffcd43',
    tasks: [
      {
        id: 'task-5',
        name: 'Code review for authentication module',
        type: 'review',
        description:
          'Check the authentication module for security issues.',
        tags: ['review', 'security'],
        timer: '00:45',
        image: '',
        subtasks: [],
        attachments: [],
        comments: [],
        isDone: false,
        users: [
          { id: 'user-5', name: 'Eve', avatar_url: '' },
        ],
      },
      {
        id: 'task-6',
        name: 'Check UI responsiveness',
        type: 'testing',
        description:
          'Ensure the UI works correctly on different devices.',
        tags: ['UI', 'testing'],
        timer: '00:30',
        image: '',
        subtasks: [],
        attachments: [],
        comments: [],
        isDone: false,
        users: [
          { id: 'user-6', name: 'Frank', avatar_url: '' },
        ],
      },
    ],
  },
  {
    id: 'column-4',
    name: 'Done',
    color: '#98db7c',
    tasks: [
      {
        id: 'task-7',
        name: 'Create project roadmap',
        type: 'planning',
        description:
          'Outline the major milestones for the project.',
        tags: ['planning', 'roadmap'],
        timer: 'Completed',
        image: '',
        subtasks: [],
        attachments: [],
        comments: [],
        isDone: false,
        users: [
          { id: 'user-7', name: 'Grace', avatar_url: '' },
        ],
      },
      {
        id: 'task-8',
        name: 'Deploy initial version',
        type: 'deployment',
        description:
          'Deploy the first version to a staging environment.',
        tags: ['deployment', 'staging'],
        timer: 'Completed',
        image: '',
        subtasks: [],
        attachments: [],
        comments: [],
        isDone: false,
        users: [
          { id: 'user-8', name: 'Henry', avatar_url: '' },
        ],
      },
    ],
  },
]
