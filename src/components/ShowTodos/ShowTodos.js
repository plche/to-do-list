import styled from "styled-components";

const Input = styled.input.attrs({
    type: 'submit',
    value: 'Delete'
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
    background-color: #212529;
    color: #fff;
    margin-left: 15px;
    border-radius: .25rem;
    outline: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-weight: 500;
    &:hover {
        background-color: #000;
    }
`;

const ShowTodos = (props) => {
    const {todos, onDoneTodo, onRemoveTodo} = props;

    const handleOnSubmit = (e, index) => {
        e.preventDefault();
        onRemoveTodo(index);
    }

    const handleOnChange = (e, index) => {
        onDoneTodo(index);
    }

    return(
        todos.map((todo, index) => <div key={'todo_' + index}>
            <form onSubmit={e => handleOnSubmit(e, index)}>
                <label htmlFor="task">{todo.done ? <del>{todo.task}</del> : todo.task} <input type="checkbox" checked={todo.done} onChange={e => handleOnChange(e, index)} /></label>
                <Input type="submit" value="Delete"/>
            </form>
        </div>)
    );
}

export default ShowTodos;