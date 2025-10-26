
import type { UserProfile, Task, CalendarEvent } from '@/lib/types';
import { Timestamp } from 'firebase/firestore';

export const users: UserProfile[] = [
  {
    uid: '1',
    displayName: 'Alice Johnson',
    role: 'Project Manager',
    email: 'alice@example.com',
    photoURL: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc2MTM4NTI1OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    uid: '2',
    displayName: 'Bob Williams',
    role: 'Team Member',
    email: 'bob@example.com',
    photoURL: 'https://images.unsplash.com/photo-1583195763986-0231686dcd43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjEzNjg0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    uid: '3',
    displayName: 'Charlie Brown',
    role: 'Mentor',
    email: 'charlie@example.com',
    photoURL: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjEzMjQyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    uid: '4',
    displayName: 'Diana Miller',
    role: 'Viewer',
    email: 'diana@example.com',
    photoURL: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3b21hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzYxMzQ1MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export const tasks: Task[] = [
  {
    uid: 't1',
    title: 'Design Dashboard Mockups',
    description:
      'Create high-fidelity mockups for the main dashboard and admin panel. Focus on a clean, modern design that is both intuitive and visually appealing. Ensure all components from the design system are utilized correctly.',
    status: 'Done',
    ownerUid: '1',
    assignees: [users[0]],
    comments: [
        {
            uid: 'c1',
            user: users[1],
            comment: 'Looks great! Approved.',
            timestamp: Timestamp.fromMillis(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        },
        {
            uid: 'c2',
            user: users[0],
            comment: 'Thanks for the feedback, Bob!',
            timestamp: Timestamp.fromMillis(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        }
    ]
  },
  {
    uid: 't2',
    title: 'Develop API Endpoints for Tasks',
    description: 'Implement CRUD operations for tasks in the backend. This includes creating, reading, updating, and deleting tasks. Ensure proper authentication and validation is in place.',
    status: 'In Progress',
    ownerUid: '2',
     assignees: [users[1]],
     comments: [
        {
            uid: 'c3',
            user: users[2],
            comment: "Don't forget to add pagination to the GET endpoint.",
            timestamp: Timestamp.fromMillis(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
        }
     ]
  },
  {
    uid: 't3',
    title: 'Setup CI/CD Pipeline',
    description:
      'Configure continuous integration and deployment for the project using GitHub Actions. The pipeline should run tests, build the project, and deploy to the staging environment on every push to the main branch.',
    status: 'To Do',
    ownerUid: '2',
     assignees: [users[1]],
     comments: [],
  },
  {
    uid: 't4',
    title: 'Write User Documentation',
    description: 'Draft the initial version of the user guide. It should cover all major features of the application, including task management, calendar integration, and team collaboration.',
    status: 'To Do',
    ownerUid: '3',
    assignees: [users[2]],
    comments: [],
  },
  {
    uid: 't5',
    title: 'Test Google Calendar Integration',
    description: 'Ensure calendar events sync correctly both ways between our app and Google Calendar. Test creating, updating, and deleting events.',
    status: 'In Progress',
    ownerUid: '1',
    assignees: [users[0]],
    comments: [],
  },
   {
    uid: 't6',
    title: 'Review PR for New Button Component',
    description: 'Provide feedback on the new UI component pull request. Check for accessibility, responsiveness, and adherence to the design system.',
    status: 'Done',
    ownerUid: '4',
    assignees: [users[3]],
    comments: [],
  },
  {
    uid: 't7',
    title: 'Implement User Profile Page',
    description: 'Create a new page where users can view and edit their profile information.',
    status: 'To Do',
    ownerUid: '1',
    assignees: [users[0]],
    comments: [],
  },
  {
    uid: 't8',
    title: 'Refactor Authentication Flow',
    description: 'Improve the login and registration process for better user experience.',
    status: 'To Do',
    ownerUid: '2',
    assignees: [users[1]],
    comments: [],
  },
  {
    uid: 't9',
    title: 'Integrate with a third-party analytics service',
    description: 'Add analytics to track user engagement and feature usage.',
    status: 'In Progress',
    ownerUid: '1',
    assignees: [users[0]],
    comments: [],
  },
  {
    uid: 't10',
    title: 'Fix responsiveness issues on the dashboard',
    description: 'Ensure the dashboard layout is fully responsive on mobile and tablet devices.',
    status: 'In Progress',
    ownerUid: '2',
    assignees: [users[1]],
    comments: [],
  },
  {
    uid: 't11',
    title: 'Update UI Kit to latest version',
    description: 'Upgrade ShadCN and other UI dependencies to their latest versions.',
    status: 'Done',
    ownerUid: '3',
    assignees: [users[2]],
    comments: [],
  }
];

export const events: Omit<CalendarEvent, 'uid' | 'start'> & { start: Date }[] = [
  {
    title: 'Project Kick-off Meeting',
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    type: 'meeting',
    meetingLink: 'https://meet.google.com/abc-xyz-pqr',
  },
  {
    title: 'Phase 1 Deadline',
    start: new Date(new Date().setDate(new Date().getDate() + 5)),
    type: 'deadline',
  },
  {
    title: 'Weekly Sync',
    start: new Date(new Date().setDate(new Date().getDate() + 7)),
    type: 'meeting',
    meetingLink: 'https://meet.google.com/def-uvw-lmn',
  },
];
