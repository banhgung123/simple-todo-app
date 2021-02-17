import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import todoApi from 'api/todoApi';
import { Box } from '@material-ui/core';

function Todo(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await todoApi.getAll({ params: { _limit: 5 } });
            setTodos(response);
        })();
    }, [])

    const handleCheckboxChange = id => { 
        const newTodos = todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        });

        setTodos(newTodos);
    };

    const deleteTodo = async (id) => {
        await todoApi.remove(id);
        const newTodos = todos.filter(todo => todo.id !== id);

        setTodos(newTodos);
    };

    const addTodo = async (values) => {
        const newTodo = {
            ...values,
            completed: false,
        };

        const response = await todoApi.add(newTodo);
        const newTodos = [...todos, response];
        setTodos(newTodos);
    };

    return (
        <Box>
            <TodoForm addTodo={addTodo}/>
            <TodoList
                todos={todos}
                handleChange={handleCheckboxChange}
                deleteTodo={deleteTodo}
            />
        </Box>
    );
}

export default Todo;