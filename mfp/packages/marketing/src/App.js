import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'marketing'
})

export default () => {
    return (
        <div className="marketingApp">
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}