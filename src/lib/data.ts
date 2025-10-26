
import type { UserProfile, Task, CalendarEvent } from '@/lib/types';
import { Timestamp } from 'firebase/firestore';

export const users: UserProfile[] = [
  {
    uid: '1',
    displayName: 'Alice Johnson',
    role: 'Project Manager',
    email: 'alice@example.com',
  },
  {
    uid: '2',
    displayName: 'Bob Williams',
    role: 'Team Member',
    email: 'bob@example.com',
  },
  {
    uid: '3',
    displayName: 'Charlie Brown',
    role: 'Mentor',
    email: 'charlie@example.com',
  },
  {
    uid: '4',
    displayName: 'Diana Miller',
    role: 'Viewer',
    email: 'diana@example.com',
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
