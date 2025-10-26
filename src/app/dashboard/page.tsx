
'use client';

import { useMemo } from 'react';
import type { Task, TaskStatus } from '@/lib/types';
import { TaskCard } from '@/components/dashboard/task-card';
import { AddTaskDialog } from '@/components/dashboard/add-task-dialog';
import { tasks as mockTasks } from '@/lib/data';

export default function DashboardPage() {
  const columns: { title: TaskStatus; tasks: Task[] }[] = useMemo(() => {
    const taskData = mockTasks || [];
    return [
      {
        title: 'To Do',
        tasks: taskData.filter((task) => task.status === 'To Do'),
      },
      {
        title: 'In Progress',
        tasks: taskData.filter((task) => task.status === 'In Progress'),
      },
      {
        title: 'Done',
        tasks: taskData.filter((task) => task.status === 'Done'),
      },
    ];
  }, [mockTasks]);

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Task Board</h2>
        <div className="flex items-center space-x-2">
          <AddTaskDialog />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="rounded-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              {column.title}
              <span className="ml-2 text-sm text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                {column.tasks.length}
              </span>
            </h3>
            <div className="space-y-4">
              {column.tasks.map((task) => (
                <TaskCard key={task.uid} task={task} />
              ))}
              {column.tasks.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 p-12 text-center h-full">
                  <p className="text-sm text-muted-foreground">No tasks in this column.</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
