import { Box, Button } from '@material-ui/core';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import './styles.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
    addTodo: PropTypes.func
};

TodoForm.defaultProps = {
    addTodo: null
}

const schema = yup.object().shape({
  title: yup.string().required('Todo is must be required before adding to list.'),
});

function TodoForm(props) {

    const form = useForm({
        defaultValues: {
            title: ''
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { addTodo } = props;
        if (!addTodo) return;

        addTodo(values);
        form.reset();
    };

    return (
        <Box component="form" onSubmit={form.handleSubmit(handleSubmit)}>
            <Box className="todoform">
                <InputField
                    fullWidth
                    className="todoform-input"
                    placeholder="Add Todo..."
                    name="title"
                    form={form}
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    className="todoform-submit"
                >
                    submit
                </Button>
            </Box>
        </Box>
        
    );
}

export default TodoForm;