import {useRef, useState} from "react";
import styled from "styled-components";
import Todo from "../../Todo";

const Input = styled.input.attrs({
    type: 'submit',
    value: 'Add'
})`
    font-size: 1rem;
    padding: .375rem .75rem;
    margin-bottom: 0;
  
    display: inline-block;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    line-height: 1.5;
    border: 1px solid transparent;
    background-color: #0d6efd;
    color: #fff;
    margin-top: 5px;
    border-radius: .25rem;
    outline: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-weight: 500;
    &:hover {
        background-color: #0a58ca;
    }
`;

const TextInput = styled.input.attrs({
    type: 'text'
})`
    width: 15rem;
    border: 1px solid transparent;
    font-size: 1rem;
    padding: .75rem;
  
    display: block;
    background-color: #e9ecef;
    margin: 0 0 1em;
`;

const AddTodoForm = (props) => {
    const {onNewTodo, currentTodos} = props;
    const [todo, setTodo] = useState(new Todo(currentTodos + 1,"", false));
    const inputEl = useRef(null);

    const handleOnSubmit = e => {
        e.preventDefault();
        onNewTodo(todo);
        setTodo({...todo,["task"]: ""})
        inputEl.current.focus();
    }

    const handleOnChange = e => setTodo({...todo, [e.target.name]: e.target.value});

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="task"></label>
                <TextInput type="text" onChange={handleOnChange}
                       name="task" value={todo.task} ref={inputEl}/>
                <div>
                    <Input />
                </div>
            </form>
            <br/>
        </div>
    );
}

export default AddTodoForm;