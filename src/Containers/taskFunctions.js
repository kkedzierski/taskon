import React, { useState } from 'react';
import NewTask from '../PresentTask/NewTask';
import TaskList from '../PresentTask/TaskList';


export default function TaskFunctions() {

    const [newTask, setNewTask] = useState({});
    const [allTasks, setAllTaks] = useState([]);
    
    
    const handleChange = ({target}) => {
        const {name, value} = target;
        setNewTask((prev) => ({
            ...prev,
            id: Date.now(),
           [name]: value
           
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!newTask.title) return;
        setAllTaks((prev)=>[
            newTask,
            ...prev
        ]);
        setNewTask({});
    }

    const handleDelete = (taskIdToRemove) => {
        setAllTaks((prev)=>
            prev.filter(task => task.id !== taskIdToRemove)
            );
    }

    return (
        <main>
            <h1>Zadania</h1>
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