import { Box } from '@material-ui/core';
import './styles.scss';

function Header(props) {

    return (
        <Box
            component="header"
            className="header-container"
        >
            <Box
                component="h1"
                className="header-title"
            >
                Simple Todo App
            </Box>
        </Box>
    );
}

export default Header;