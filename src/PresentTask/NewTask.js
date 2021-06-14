import React from 'react';

export default function NewTast({newTask, handleChange, handleSubmit}){
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="Nowe zadanie"
                value={newTask.title || ""}
                onChange={handleChange}
            />
            {!newTask.title ? null : (
            <>
                <textarea
                    name="description"
                    placeholder="Szczegóły..."
                    value={newTask.description || ""}
                    onChange={handleChange}
                />
                <button type="submit">Dodaj</button>
            </>
            )}
        </form>
    )
}