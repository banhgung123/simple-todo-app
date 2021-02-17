import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
    root: {
        color: '#fff',
        opacity: 0.8,
        fontSize: '14px',
        background: 'rgba(103, 140, 137, 0.65)',
        fontWeight: theme.typography.fontWeightRegular,
        border: 0,
        outline: 0,
        width: '75%',
        borderRadius: 0,
    }
}));

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,

    placeholder: PropTypes.string
};

InputField.defaultProps = {
    placeholder: ''
};

function InputField(props) {
    const classes = useStyles();
    const {
        name, form,
        placeholder,
    } = props;
    const { errors } = form;
    const hasError = errors[name] !== undefined;

    return (
        <Controller 
            name={name}
            control={form.control}
            as={TextField}

            classes={{root: classes.root}}
            placeholder={placeholder}
            variant="filled"

            error={hasError}
            label={errors[name]?.message}
        />
    );
}

export default InputField;