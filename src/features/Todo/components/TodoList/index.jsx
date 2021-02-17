import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

TodoList.propTypes = {
    todos: PropTypes.array,
    handleChange: PropTypes.func,
    deleteTodo: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    handleChange: null,
    deleteTodo: null,
};

function TodoList(props) {
    const { todos, handleChange, deleteTodo } = props;

    return (
        <Box component="ul">
            {todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChange={handleChange}
                    deleteTodo={deleteTodo}
                />)}
        </Box>
    );
}

export default TodoList;