import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import App from './components/App'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)))

ReactDOMClient.createRoot(document.querySelector('#root')).render(
    <Provider store={ store }>
        <App />
    </Provider>
)