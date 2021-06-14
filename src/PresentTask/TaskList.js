import React from 'react';

export default function TaskList({ allTasks, handleDelete }){
    
    return(
        <ul>
            {allTasks.map(({id, title, description}) => (
                <li id={id}>
                    <div>
                        <h2>{title}</h2>
                        <button onClick={()=> handleDelete(id)}>Usuń</button>
                    </div>
                    {!description ? null : (<p>{description}</p>)}
                </li>
            ))}
        </ul>
    );
}