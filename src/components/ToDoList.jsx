import React, { useState } from 'react';
import { List, 
         ListItem,
         TextField,
         Button 
         } from '@mui/material';

const ToDoList = ( {
    tasks, 
    onChangeTask,
    onDeleteTask
} ) => {

  return (
    <div className='todo-list'>
      <List>
        {tasks.map((task) => {
          return (
            <ListItem 
                key={task.id} 
                disablePadding
            >
                <Task 
                    task={task}
                    onChange={onChangeTask}
                    onDelete={onDeleteTask}
                />
              {/* <ListItemButton>
                <ListItemIcon>
                  <Checkbox 
                    checked={todo.complete} 
                    onChange={() => handleCheckbox(todo.id)} 
                    disableRipple />
                </ListItemIcon>
                <ListItemText 
                  primary={task.task}
                  className={task.done ? "completed" : ""}
                  // className={todo.complete && "complete"}
                />
              </ListItemButton> */}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;

const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <TextField
                    label="Task"
                    variant="filled"
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }}
                />
                {/* <input
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }}
                /> */}
                <Button 
                    variant='outlined'
                    onClick={() => setIsEditing(false)}>
                    Save
                </Button>
                {/* <button onClick={() => setIsEditing(false)}>
                    Save
                </button> */}
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                {/* <button onClick={() => setIsEditing(true)}>
                    Edit
                </button> */}
                <Button
                    variant='outlined' 
                    onClick={() => setIsEditing(true)}>
                    Edit
                </Button>
            </>
        );
    }
    return (
        <label>
            {/* <input
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    onChange({
                        ...task,
                        done: e.target.checked
                    });
                }}
            /> */}
            <TextField
                label="Task"
                variant="filled"
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    onChange({
                        ...task,
                        done: e.target.checked
                    });
                }}
            />
            {taskContent}
            {/* <button onClick={() => onDelete(task.id)}>
                Delete
            </button> */}
            <Button 
                variant='outlined'
                onClick={() => onDelete(task.id)}>
                Delete
            </Button>
        </label>
    )
}