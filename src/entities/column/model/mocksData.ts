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
        subtasks: [
          {
            id: 'subtask-1',
            name: 'Create GitHub repository',
            description:
              'Set up a new repository on GitHub.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: true,
          },
          {
            id: 'subtask-2',
            name: 'Initialize project structure',
            description:
              'Create folders for src, assets, and components.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
          {
            id: 'subtask-3',
            name: 'Install dependencies',
            description:
              'Install required packages using npm or yarn.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
          {
            id: 'subtask-4',
            name: 'Set up ESLint and Prettier',
            description:
              'Configure linting and code formatting tools.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
          {
            id: 'subtask-5',
            name: 'Create README file',
            description:
              'Write a detailed README for the project.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
          {
            id: 'subtask-6',
            name: 'Set up CI/CD pipeline',
            description:
              'Configure GitHub Actions for automated testing and deployment.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
          {
            id: 'subtask-7',
            name: 'Add license file',
            description:
              'Choose and add an appropriate license for the project.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
          {
            id: 'subtask-8',
            name: 'Set up testing framework',
            description:
              'Configure Jest or another testing framework.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
          {
            id: 'subtask-9',
            name: 'Create initial commit',
            description:
              'Commit the initial project structure to the repository.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
          {
            id: 'subtask-10',
            name: 'Set up documentation',
            description:
              'Configure a documentation tool like Storybook or Docusaurus.',
            users: [
              {
                id: 'user-1',
                name: 'Alice',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
        ],
        attachments: [
          {
            id: 'attachment-1',
            fileUrl:
              'https://example.com/project-structure.pdf',
            fileName: 'Project Structure.pdf',
          },
          {
            id: 'attachment-2',
            fileUrl:
              'https://example.com/dependencies-list.json',
            fileName: 'Dependencies List.json',
          },
          {
            id: 'attachment-3',
            fileUrl:
              'https://example.com/eslint-config.json',
            fileName: 'ESLint Config.json',
          },
          {
            id: 'attachment-4',
            fileUrl: 'https://example.com/readme-draft.md',
            fileName: 'README Draft.md',
          },
          {
            id: 'attachment-5',
            fileUrl:
              'https://example.com/ci-cd-pipeline.yaml',
            fileName: 'CI-CD Pipeline.yaml',
          },
          {
            id: 'attachment-6',
            fileUrl: 'https://example.com/license.txt',
            fileName: 'License.txt',
          },
          {
            id: 'attachment-7',
            fileUrl: 'https://example.com/jest-config.js',
            fileName: 'Jest Config.js',
          },
          {
            id: 'attachment-8',
            fileUrl:
              'https://example.com/initial-commit.log',
            fileName: 'Initial Commit.log',
          },
          {
            id: 'attachment-9',
            fileUrl:
              'https://example.com/documentation-setup.md',
            fileName: 'Documentation Setup.md',
          },
          {
            id: 'attachment-10',
            fileUrl:
              'https://example.com/project-roadmap.pdf',
            fileName: 'Project Roadmap.pdf',
          },
        ],
        comments: [
          {
            /* eslint-disable */
            text: 'Repository created successfully.',
            createdAt: '2023-10-01T10:00:00Z',
            author: {
              id: 'user-1',
              name: 'Alice',
              avatarUrl: '',
            },
          },
          {
            text: 'Need to finalize the folder structure.',
            createdAt: '2023-10-01T11:00:00Z',
            author: {
              id: 'user-2',
              name: 'Bob',
              avatarUrl: '',
            },
          },
          {
            text: 'Dependencies installed successfully.',
            createdAt: '2023-10-01T12:00:00Z',
            author: {
              id: 'user-1',
              name: 'Alice',
              avatarUrl: '',
            },
          },
          {
            text: 'ESLint and Prettier configurations need review.',
            createdAt: '2023-10-01T13:00:00Z',
            author: {
              id: 'user-3',
              name: 'Charlie',
              avatarUrl: '',
            },
          },
          {
            text: 'README file is ready for review.',
            createdAt: '2023-10-01T14:00:00Z',
            author: {
              id: 'user-1',
              name: 'Alice',
              avatarUrl: '',
            },
          },
          {
            text: 'CI/CD pipeline setup is in progress.',
            createdAt: '2023-10-01T15:00:00Z',
            author: {
              id: 'user-4',
              name: 'David',
              avatarUrl: '',
            },
          },
          {
            text: 'License file added successfully.',
            createdAt: '2023-10-01T16:00:00Z',
            author: {
              id: 'user-1',
              name: 'Alice',
              avatarUrl: '',
            },
          },
          {
            text: 'Testing framework setup completed.',
            createdAt: '2023-10-01T17:00:00Z',
            author: {
              id: 'user-5',
              name: 'Eve',
              avatarUrl: '',
            },
          },

          {
            text: 'Initial commit pushed to the repository.',
            createdAt: '2023-10-01T18:00:00Z',
            author: {
              id: 'user-1',
              name: 'Alice',
              avatarUrl: '',
            },
          },
          {
            text: 'Documentation setup is in progress.',
            createdAt: '2023-10-01T19:00:00Z',
            author: {
              id: 'user-6',
              name: 'Frank',
              avatarUrl: '',
            },
          },
        ],
        isDone: false,
        users: [
          { id: 'user-1', name: 'Alice', avatarUrl: '' },
          { id: 'user-15', name: 'Alice', avatarUrl: '' },
          { id: 'user-16', name: 'Alice', avatarUrl: '' },
          { id: 'user-17', name: 'Alice', avatarUrl: '' },
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
        subtasks: [
          {
            id: 'subtask-13',
            name: 'Sketch wireframe',
            description:
              'Draw a basic wireframe for the login page.',
            users: [
              { id: 'user-2', name: 'Bob', avatarUrl: '' },
            ],
            isDone: true,
          },
          {
            id: 'subtask-14',
            name: 'Review wireframe with team',
            description:
              'Get feedback on the wireframe from the team.',
            users: [
              { id: 'user-2', name: 'Bob', avatarUrl: '' },
            ],
            isDone: false,
          },
        ],
        attachments: [
          {
            id: 'attachment-2',
            fileUrl:
              'https://example.com/login-wireframe.png',
            fileName: 'Login Wireframe.png',
          },
        ],
        comments: [
          {
            text: 'Wireframe sketch completed.',
            createdAt: '2023-10-02T09:00:00Z',
            author: {
              id: 'user-2',
              name: 'Bob',
              avatarUrl: '',
            },
          },
        ],
        isDone: false,
        users: [
          { id: 'user-2', name: 'Bob', avatarUrl: '' },
        ],
      },
      // Остальные таски в колонке "To Do"...
    ],
  },
  {
    id: 'column-2',
    name: 'In Work',
    color: '#3361ff',
    tasks: [
      {
        id: 'task-7',
        name: 'Develop authentication logic',
        type: 'backend',
        description:
          'Implement JWT authentication in the backend.',
        tags: ['auth', 'backend'],
        timer: '02:30',
        image: '',
        subtasks: [
          {
            id: 'subtask-15',
            name: 'Set up JWT library',
            description:
              'Install and configure the JWT library.',
            users: [
              {
                id: 'user-3',
                name: 'Charlie',
                avatarUrl: '',
              },
            ],
            isDone: true,
          },
          {
            id: 'subtask-16',
            name: 'Implement token generation',
            description:
              'Write logic to generate JWT tokens.',
            users: [
              {
                id: 'user-3',
                name: 'Charlie',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
        ],
        attachments: [
          {
            id: 'attachment-3',
            fileUrl: 'https://example.com/jwt-config.json',
            fileName: 'JWT Config.json',
          },
        ],
        comments: [
          {
            text: 'JWT library installed successfully.',
            createdAt: '2023-10-03T14:00:00Z',
            author: {
              id: 'user-3',
              name: 'Charlie',
              avatarUrl: '',
            },
          },
        ],
        isDone: false,
        users: [
          { id: 'user-3', name: 'Charlie', avatarUrl: '' },
        ],
      },
      {
        id: 'task-8',
        name: 'Create database schema',
        type: 'database',
        description:
          'Define the database schema for users and tasks.',
        tags: ['database', 'schema'],
        timer: '01:15',
        image: '',
        subtasks: [
          {
            id: 'subtask-17',
            name: 'Define user table',
            description:
              'Create schema for the user table.',
            users: [
              {
                id: 'user-4',
                name: 'David',
                avatarUrl: '',
              },
            ],
            isDone: true,
          },
          {
            id: 'subtask-18',
            name: 'Define task table',
            description:
              'Create schema for the task table.',
            users: [
              {
                id: 'user-4',
                name: 'David',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
        ],
        attachments: [
          {
            id: 'attachment-4',
            fileUrl: 'https://example.com/db-schema.sql',
            fileName: 'Database Schema.sql',
          },
        ],
        comments: [
          {
            text: 'User table schema completed.',
            createdAt: '2023-10-04T10:00:00Z',
            author: {
              id: 'user-4',
              name: 'David',
              avatarUrl: '',
            },
          },
        ],
        isDone: false,
        users: [
          { id: 'user-4', name: 'David', avatarUrl: '' },
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
        id: 'task-9',
        name: 'Code review for authentication module',
        type: 'review',
        description:
          'Check the authentication module for security issues.',
        tags: ['review', 'security'],
        timer: '00:45',
        image: '',
        subtasks: [
          {
            id: 'subtask-19',
            name: 'Review token generation logic',
            description:
              'Check for vulnerabilities in token generation.',
            users: [
              { id: 'user-5', name: 'Eve', avatarUrl: '' },
            ],
            isDone: false,
          },
        ],
        attachments: [
          {
            id: 'attachment-5',
            fileUrl: 'https://example.com/auth-review.pdf',
            fileName: 'Auth Review Report.pdf',
          },
        ],
        comments: [
          {
            text: 'Started reviewing the authentication module.',
            createdAt: '2023-10-05T09:00:00Z',
            author: {
              id: 'user-5',
              name: 'Eve',
              avatarUrl: '',
            },
          },
        ],
        isDone: false,
        users: [
          { id: 'user-5', name: 'Eve', avatarUrl: '' },
        ],
      },
      {
        id: 'task-10',
        name: 'Check UI responsiveness',
        type: 'testing',
        description:
          'Ensure the UI works correctly on different devices.',
        tags: ['UI', 'testing'],
        timer: '00:30',
        image: '',
        subtasks: [
          {
            id: 'subtask-20',
            name: 'Test on mobile devices',
            description:
              'Check responsiveness on mobile screens.',
            users: [
              {
                id: 'user-6',
                name: 'Frank',
                avatarUrl: '',
              },
            ],
            isDone: false,
          },
        ],
        attachments: [
          {
            id: 'attachment-6',
            fileUrl:
              'https://example.com/responsiveness-test.pdf',
            fileName: 'Responsiveness Test Report.pdf',
          },
        ],
        comments: [
          {
            text: 'Testing started on mobile devices.',
            createdAt: '2023-10-06T11:00:00Z',
            author: {
              id: 'user-6',
              name: 'Frank',
              avatarUrl: '',
            },
          },
        ],
        isDone: false,
        users: [
          { id: 'user-6', name: 'Frank', avatarUrl: '' },
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
        id: 'task-11',
        name: 'Create project roadmap',
        type: 'planning',
        description:
          'Outline the major milestones for the project.',
        tags: ['planning', 'roadmap'],
        timer: 'Completed',
        image: '',
        subtasks: [
          {
            id: 'subtask-21',
            name: 'Define project phases',
            description:
              'Break down the project into phases.',
            users: [
              {
                id: 'user-7',
                name: 'Grace',
                avatarUrl: '',
              },
            ],
            isDone: true,
          },
        ],
        attachments: [
          {
            id: 'attachment-7',
            fileUrl:
              'https://example.com/project-roadmap.pdf',
            fileName: 'Project Roadmap.pdf',
          },
        ],
        comments: [
          {
            text: 'Roadmap finalized and approved.',
            createdAt: '2023-10-07T12:00:00Z',
            author: {
              id: 'user-7',
              name: 'Grace',
              avatarUrl: '',
            },
          },
        ],
        isDone: true,
        users: [
          { id: 'user-7', name: 'Grace', avatarUrl: '' },
        ],
      },
      {
        id: 'task-12',
        name: 'Deploy initial version',
        type: 'deployment',
        description:
          'Deploy the first version to a staging environment.',
        tags: ['deployment', 'staging'],
        timer: 'Completed',
        image: '',
        subtasks: [
          {
            id: 'subtask-22',
            name: 'Set up staging environment',
            description:
              'Prepare the staging server for deployment.',
            users: [
              {
                id: 'user-8',
                name: 'Henry',
                avatarUrl: '',
              },
            ],
            isDone: true,
          },
        ],
        attachments: [
          {
            id: 'attachment-8',
            fileUrl:
              'https://example.com/deployment-log.txt',
            fileName: 'Deployment Log.txt',
          },
        ],
        comments: [
          {
            text: 'Deployment to staging completed successfully.',
            createdAt: '2023-10-08T14:00:00Z',
            author: {
              id: 'user-8',
              name: 'Henry',
              avatarUrl: '',
            },
          },
        ],
        isDone: true,
        users: [
          { id: 'user-8', name: 'Henry', avatarUrl: '' },
        ],
      },
    ],
  },
]
