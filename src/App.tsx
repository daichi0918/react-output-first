import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { styled } from '@mui/material/styles';

const initialState = [
  {
    task: 'Todo1',
  },
  {
    task: 'Todo2',
  }
]

const CustomButton = styled(Button)({
  backgroundColor: '#000',
  color: '#fff',
  fontFamily: [
    'Times New Roman',
    'Times',
    'serif',
  ],
  fontWeight: 'bold',
  height: '42px',
  marginLeft: '1px',
  '&:hover': {
    backgroundColor: '#808080',
    color: '#fff'
  },

})

function App() {
  const [task, setTask] = useState<string>('')
  const [todos, setTodos] = useState<{task: string}[]>(initialState);

  const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(task === '') return
    setTodos([...todos,{ task }])
    setTask('')
  }

  return (
    <>
      <div className='App'>
        <h1 className="title">Todo List</h1>
        <section className="section-sub-title">
          <h2 className='sub-title'>ADD TODO</h2>
          <TextField
            className='input'
            size="small"
            label="New Todo"
            value={task}
            onChange={handleNewTask}
          />
          <CustomButton 
            variant="contained"
            onClick={handleAdd}
          >
            ADD
          </CustomButton>
        </section>
        <section className="list">
          <List>
            { todos.map((todo, index) => (
              <ListItem 
                key={index}
                secondaryAction={
                  <IconButton className="icon" edge="end" aria-label="delete">
                    <DeleteIcon 
                      sx={{
                        color: '#fff'
                      }}/>
                  </IconButton>
                }
              >
                <ListItemText
                  primary={todo.task}
                  primaryTypographyProps={{
                    fontFamily: 'Times New Roman,Times,serif',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}

                />
              </ListItem>
            ))}
          </List>
        </section>
      </div>
    </>
  );
}

export default App;
