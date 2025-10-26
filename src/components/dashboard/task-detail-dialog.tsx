
'use client';

import { useState } from 'react';
import type { Task, Comment } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { useUser } from '@/firebase';
import { Timestamp } from 'firebase/firestore';
import { formatDistanceToNow } from 'date-fns';
import { Separator } from '../ui/separator';

type TaskDetailDialogProps = {
  task: Task;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

function CommentEntry({ comment }: { comment: Comment }) {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="h-9 w-9">
        <AvatarImage src={comment.user.photoURL ?? ''} />
        <AvatarFallback>{comment.user.displayName?.charAt(0) ?? 'U'}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold">{comment.user.displayName}</p>
          <p className="text-xs text-muted-foreground">
            {formatDistanceToNow(comment.timestamp.toDate(), { addSuffix: true })}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">{comment.comment}</p>
      </div>
    </div>
  );
}


export function TaskDetailDialog({ task, open, onOpenChange, children }: TaskDetailDialogProps) {
  const { data: currentUser } = useUser();
  const [newComment, setNewComment] = useState('');
  // In a real app, comments would be part of the task state and updated via a backend call.
  // For this mock, we'll just manage them in local state to demonstrate the UI.
  const [comments, setComments] = useState<Comment[]>(task.comments || []);

  const handleAddComment = () => {
    if (!newComment.trim() || !currentUser) return;

    const comment: Comment = {
      uid: `c${Date.now()}`,
      user: currentUser,
      comment: newComment,
      timestamp: Timestamp.now(),
    };

    setComments(prev => [...prev, comment]);
    setNewComment('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        {children}
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-2 pt-1">
            <Badge variant={task.status === 'Done' ? 'default' : 'secondary'}>
              {task.status}
            </Badge>
            <span>•</span>
            <span className="text-sm text-muted-foreground">
              Opened by {task.assignees?.[0]?.displayName ?? 'Unassigned'}
            </span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
            <div className="prose prose-sm dark:prose-invert max-w-none text-foreground">
                <p>{task.description}</p>
            </div>
            
            <Separator />

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Comments ({comments.length})</h3>
                <ScrollArea className="h-48 pr-4">
                    <div className="space-y-6">
                        {comments.length > 0 ? (
                           comments.map(comment => <CommentEntry key={comment.uid} comment={comment} />)
                        ) : (
                            <p className="text-sm text-muted-foreground text-center py-4">No comments yet.</p>
                        )}
                    </div>
                </ScrollArea>
            </div>
            
            {currentUser && (
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                         <Avatar className="h-9 w-9">
                            <AvatarImage src={currentUser.photoURL ?? ''} />
                            <AvatarFallback>{currentUser.displayName?.charAt(0) ?? 'U'}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                             <Textarea
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                rows={3}
                            />
                             <Button onClick={handleAddComment} size="sm" disabled={!newComment.trim()}>
                                Comment
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
