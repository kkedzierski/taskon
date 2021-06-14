import React from 'react';

export default function TaskList({ allTasks, handleDelete }){
    
    return(
        <ul>
            {allTasks.map(({id, title, description}) => (
                <li key={id}>
                    <div>
                        <h2>{title}</h2>
                        <button class="delteTask" onClick={()=> handleDelete(id)}>Usuń</button>
                    </div>
                    {!description ? null : (<p>{description}</p>)}
                </li>
            ))}
        </ul>
    );
}