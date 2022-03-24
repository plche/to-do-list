import {useState} from "react";
import styled from "styled-components";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import ShowTodos from "./components/ShowTodos/ShowTodos";

const AppDiv = styled.div`
    margin: 1.5rem 3rem;
`;

function App() {
    const [todos, setTodos] = useState([]);
    const newTodo = newTodo => setTodos(todos => [...todos, newTodo]);
    const doneTodo = index => setTodos(todos => todos.map((todo, idx) => idx === index ? {...todo, ["done"]: !todo.done} : todo));
    const removeTodo = index => setTodos(todos => todos.filter((todo, idx) => idx !== index));

    return (
        <AppDiv>
            <AddTodoForm onNewTodo={newTodo} currentTodos={todos.length} />
            <ShowTodos todos={todos} onDoneTodo={doneTodo} onRemoveTodo={removeTodo} />
        </AppDiv>
    );
}

export default App;
