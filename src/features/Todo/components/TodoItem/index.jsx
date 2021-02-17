import { Box, Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';
import './styles.scss';
import classNames from 'classnames';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

TodoItem.propTypes = {
    todo: PropTypes.object,
    handleChange: PropTypes.func,
    deleteTodo: PropTypes.func,
};

TodoItem.defaultProps = {
    todo: {},
    handleChange: null,
    deleteTodo: null,
}

function TodoItem(props) {
    const { todo, handleChange, deleteTodo } = props;
    const { completed, id, title } = todo;

    const handleOnChange = id => {
        if (!handleChange) return;

        handleChange(id);
    }

    const handleOnDeleteTodo = id => {
        if (!deleteTodo) return;

        deleteTodo(id);
    };
    
    return (
        <Box
            component="li"
            className="todo-item"
        >
            <Checkbox
                checked={completed}
                color="default"
                onChange={() => handleOnChange(id)}
            />
            <Box
                component="span"
                className={classNames({ completed: completed })}
            >
                {title}
            </Box>
            <HighlightOffTwoToneIcon
                fontSize="large"
                className="btn-style"
                onClick={() => handleOnDeleteTodo(id)}
            />
        </Box>
    );
}

export default TodoItem;