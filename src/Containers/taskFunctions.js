import React, { useState } from 'react';

export default function taskFunctions() {

    
    // handleChange(target){

    // }

    return (
        <main>
            <h1>Tasks</h1>
            <NewTask 
                newTask={task}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TaskList
                allTask={allTask}
                handleDelete={handleDelete}
            />
        </main>
    )
}