import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim() === '') return;
    onAddTask(title);
    setTitle('');
  };

  return (
    <Box display="flex" gap={1} mb={2}>
      <TextField 
        label="Nova tarefa" 
        variant="outlined" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Adicionar
      </Button>
    </Box>
  );
};

export default TaskInput;