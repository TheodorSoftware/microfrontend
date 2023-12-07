import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

//Mount fct to start app
const mount = (element, { onNavigate, defaultHistroy }) => {
    const history = defaultHistroy || createMemoryHistory();

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, element);

    return {
        onParentNavigate({ pathname: nextPathName }) {
            const { pathName } = history.location;

            if (pathName != nextPathName) {
                history.push(nextPathName);
            }
        }
    }
};

if (process.env.NODE_ENV === "development") {
    const devRoot = document.getElementById('_marketing-dev-root');

    if (devRoot) {
        mount(devRoot, {
            defaultHistroy: createBrowserHistory()
        });
    }
};

export { mount }