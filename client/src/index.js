import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers)

ReactDOMClient.createRoot(document.querySelector('#root')).render(
    <Provider store={ store }>
        <App />
    </Provider>
)