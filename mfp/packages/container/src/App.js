import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


// const generateClassName = createGenerateClassName({
//     productionPrefix: 'container'
// })

export default () => {
    return (
        <StylesProvider >
            <React.Fragment>
                <BrowserRouter>
                    <Header />
                    <MarketingApp />
                </BrowserRouter>
            </React.Fragment>
        </StylesProvider>
    )
};