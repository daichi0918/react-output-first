import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const initialState = [
  {
    task: 'Todo1',
  },
  {
    task: 'Todo2',
  }
]

function App() {

  const [todos, setTodos] = useState(initialState);

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
          />
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
