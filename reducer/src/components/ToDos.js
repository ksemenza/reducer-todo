import React from 'react';

const ToDos = (props) => {
    return (
        <div className='todosBox'>
            {props.todos.map(todo => <div key={todo.id} className='todoBox'><h2 onClick={(e) => props.toggleCompleted(e, todo.id)} id={todo.id} >{todo.item}</h2></div>)}
        </div>
    );
}

export default ToDos;