
'use client';

import { GitPullRequest, MessageSquare } from 'lucide-react';
import type { Task } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TaskDetailDialog } from './task-detail-dialog';
import { useState } from 'react';

const AssigneeAvatar = ({ user }: { user: { photoURL?: string | null, displayName?: string | null } }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Avatar className="h-8 w-8 border-2 border-card">
          <AvatarImage src={user.photoURL ?? undefined} />
          <AvatarFallback>{user.displayName?.charAt(0) ?? 'U'}</AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent>
        <p>{user.displayName}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export function TaskCard({ task }: { task: Task }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <TaskDetailDialog task={task} open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <div className="mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-card rounded-lg border">
        <CardHeader onClick={() => setIsDialogOpen(true)}>
          <CardTitle className="text-base font-bold">{task.title}</CardTitle>
        </CardHeader>
        <CardContent onClick={() => setIsDialogOpen(true)}>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {task.description}
          </p>
        </CardContent>
        <CardFooter onClick={() => setIsDialogOpen(true)} className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {task.assignees &&
              task.assignees.map((user, index) => (
                <AssigneeAvatar key={index} user={user} />
              ))}
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            {task.comments && task.comments.length > 0 && (
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{task.comments.length}</span>
              </div>
            )}
            {task.githubPr && (
              <div className="flex items-center gap-1">
                <GitPullRequest className="h-4 w-4" />
                <span>1</span>
              </div>
            )}
            {task.status === 'Done' && (
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
              >
                Done
              </Badge>
            )}
            {task.status === 'In Progress' && (
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
              >
                In Progress
              </Badge>
            )}
          </div>
        </CardFooter>
      </div>
    </TaskDetailDialog>
  );
}
