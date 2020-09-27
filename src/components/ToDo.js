import React from 'react';

const ToDo = ({ todo, setTodos, todos }) => {
    const deleteHandler = () => {
        setTodos(
            todos.filter(item => item.id !== todo.id)
        )
    }

    const completeHandler = () => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    //console.log(item.completed)
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                else return item;
            })
        )
        //console.log(todos)
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.name}</li>
            <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default ToDo