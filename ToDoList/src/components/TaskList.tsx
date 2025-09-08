import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';
import type { Task } from './types/Task';


interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggleTask} />
      ))}
    </List>
  );
};

export default TaskList;