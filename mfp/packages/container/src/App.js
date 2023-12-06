import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header />
                <div>
                    Does this work

                </div>
                <MarketingApp />
            </BrowserRouter>
        </React.Fragment>
    )
};