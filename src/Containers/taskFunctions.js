import React, { useState } from 'react';
import { NewTask } from '../PresentTask/NewTask';
import { TaskList } from '../PresentTask/TaskList';


export default function taskFunctions() {

    const [newTask, setNewTask] = useState({});
    const [allTasks, setAllTaks] = useState([]);
    
    
    handleChange(target){
        const {name, value} = target;
        setNewTask((prev) => ({
            ...prev,
           [name]: value,
           id: Date.now() 
        }));
    }

    handleSubmit(event){
        event.preventDefault();
        if(!newTask.title) return;
        setAllTaks((prev)=>([
            NewTask,
            ...prev
        ]);
        setNewTask=({});
    }

    hanldeDelete(taskIdToRemove){
        setAllTaks((prev)=>
            prev.filter(task => task.id != taskIdToRemove)
            );
    }

    return (
        <main>
            <h1>Tasks</h1>
            <NewTask 
                newTask={newTask}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TaskList
                allTasks={allTasks}
                handleDelete={handleDelete}
            />
        </main>
    )
}