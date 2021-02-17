import Header from 'components/Header';
import Footer from 'components/Footer';
import Loading from 'components/Loading';
import React, { Suspense } from 'react';
import './App.scss';
import { Box } from '@material-ui/core';

// Lazy load
const Todo = React.lazy(() => import('features/Todo'));

function App() {
    return (
        <Box className="container">
            <Header />
            <Suspense
                fallback={
                    <div className="App">
                        <Loading />
                    </div>
                }
            >
                <Todo />
            </Suspense>
            <Footer />
        </Box>
    );
}

export default App;
