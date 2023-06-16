import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './components/App';
import { Provider } from 'react-redux';
import store from './app/store';
import './index.css';

const theme = createTheme({})

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);