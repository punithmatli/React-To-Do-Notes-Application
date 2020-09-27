import React from 'react';

import ToDo from './ToDo'

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => {
                    return <ToDo key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
                })}
            </ul>
        </div>
    )
}

export default ToDoList