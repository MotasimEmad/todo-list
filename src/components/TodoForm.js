import React from 'react';
import { useState, useEffect, useRef } from 'react';


function TodoForm(props) {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const [input, setInput] = useState('');
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <div>
                    <input name="text" type="text" value={input} placeholder="update a todo here ..." className="todo-input edit" onChange={handleChange} ref={inputRef} />
                    <button className="todo-button edit">Update</button>
                </div>
            ) : 
                <div>
                    <input name="text" type="text" value={input} placeholder="add a todo here ..." className="todo-input" onChange={handleChange} ref={inputRef} />
                    <button className="todo-button">Add a todo</button>
                </div>
            }
        </form>
    )
}

export default TodoForm;