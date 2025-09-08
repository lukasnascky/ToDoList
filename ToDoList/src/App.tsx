import React, { useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import type { Task } from './components/types/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <div className="App">
        <Header/>
        <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
      </div>
    </Container>
  );
};

export default App;