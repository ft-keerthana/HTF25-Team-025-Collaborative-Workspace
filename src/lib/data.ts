
import type { UserProfile, Task, CalendarEvent } from '@/lib/types';

export const users: Omit<UserProfile, 'email' | 'photoURL'>[] = [
  {
    uid: '1',
    displayName: 'Alice Johnson',
    role: 'Project Manager',
  },
  {
    uid: '2',
    displayName: 'Bob Williams',
    role: 'Team Member',
  },
  {
    uid: '3',
    displayName: 'Charlie Brown',
    role: 'Mentor',
  },
  {
    uid: '4',
    displayName: 'Diana Miller',
    role: 'Viewer',
  },
];

export const tasks: Task[] = [
  {
    uid: 't1',
    title: 'Design Dashboard Mockups',
    description:
      'Create high-fidelity mockups for the main dashboard and admin panel.',
    status: 'Done',
    ownerUid: '1',
    assignees: [
        {
            uid: '1',
            displayName: 'Alice Johnson',
            role: 'Project Manager',
        }
    ],
  },
  {
    uid: 't2',
    title: 'Develop API Endpoints for Tasks',
    description: 'Implement CRUD operations for tasks in the backend.',
    status: 'In Progress',
    ownerUid: '2',
     assignees: [
        {
            uid: '2',
            displayName: 'Bob Williams',
            role: 'Team Member',
        }
    ],
  },
  {
    uid: 't3',
    title: 'Setup CI/CD Pipeline',
    description:
      'Configure continuous integration and deployment for the project.',
    status: 'To Do',
    ownerUid: '2',
     assignees: [
        {
            uid: '2',
            displayName: 'Bob Williams',
            role: 'Team Member',
        }
    ],
  },
  {
    uid: 't4',
    title: 'Write User Documentation',
    description: 'Draft the initial version of the user guide.',
    status: 'To Do',
    ownerUid: '3',
    assignees: [
        {
            uid: '3',
            displayName: 'Charlie Brown',
            role: 'Mentor',
        }
    ],
  },
  {
    uid: 't5',
    title: 'Test Google Calendar Integration',
    description: 'Ensure calendar events sync correctly.',
    status: 'In Progress',
    ownerUid: '1',
    assignees: [
        {
            uid: '1',
            displayName: 'Alice Johnson',
            role: 'Project Manager',
        }
    ],
  },
   {
    uid: 't6',
    title: 'Review PR for New Button Component',
    description: 'Provide feedback on the new UI component pull request.',
    status: 'Done',
    ownerUid: '4',
    assignees: [
        {
            uid: '4',
            displayName: 'Diana Miller',
            role: 'Viewer',
        }
    ],
  },
  {
    uid: 't7',
    title: 'Implement User Profile Page',
    description: 'Create a new page where users can view and edit their profile information.',
    status: 'To Do',
    ownerUid: '1',
    assignees: [
        {
            uid: '1',
            displayName: 'Alice Johnson',
            role: 'Project Manager',
        }
    ],
  },
  {
    uid: 't8',
    title: 'Refactor Authentication Flow',
    description: 'Improve the login and registration process for better user experience.',
    status: 'To Do',
    ownerUid: '2',
    assignees: [
        {
            uid: '2',
            displayName: 'Bob Williams',
            role: 'Team Member',
        }
    ],
  },
  {
    uid: 't9',
    title: 'Integrate with a third-party analytics service',
    description: 'Add analytics to track user engagement and feature usage.',
    status: 'In Progress',
    ownerUid: '1',
    assignees: [
        {
            uid: '1',
            displayName: 'Alice Johnson',
            role: 'Project Manager',
        }
    ],
  },
  {
    uid: 't10',
    title: 'Fix responsiveness issues on the dashboard',
    description: 'Ensure the dashboard layout is fully responsive on mobile and tablet devices.',
    status: 'In Progress',
    ownerUid: '2',
    assignees: [
        {
            uid: '2',
            displayName: 'Bob Williams',
            role: 'Team Member',
        }
    ],
  },
  {
    uid: 't11',
    title: 'Update UI Kit to latest version',
    description: 'Upgrade ShadCN and other UI dependencies to their latest versions.',
    status: 'Done',
    ownerUid: '3',
    assignees: [
        {
            uid: '3',
            displayName: 'Charlie Brown',
            role: 'Mentor',
        }
    ],
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
