import React from 'react';

import Todo from './Todo';

export default function Display({ todos, toggle }) {



    return (
        <div className="display">
            {todos.map(todo => (
            <Todo toggle={toggle} todo={todo}/>
            ))}
        </div>
    )
}