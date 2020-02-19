import React from 'react';


export default function Todo({todo, toggle }){

    return (
        <h1 onClick={() => toggle(todo.id)} className={todo.completed ? "completed" : null}>{todo.task}</h1>
    )
}