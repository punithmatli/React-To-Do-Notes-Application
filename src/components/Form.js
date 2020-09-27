import React from 'react';

const Form = ({ setInputText, inputText, status, todos, setTodos, setStatus }) => {
    const inputChangeHandler = (event) => {
        setInputText(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            { name: inputText, completed: false, id: Math.random() * 100 }
        ]);
        setInputText('');
    }

    const statusHandler = (event) => {
        console.log("Hey", event.target.value)
        setStatus(event.target.value);
        console.log(status);
    }

    return <div>
        <form onSubmit={formSubmitHandler}>
            <input type="text" value={inputText} onChange={inputChangeHandler} className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    </div>
}

export default Form;