import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import thunk from 'redux-thunk'

import App from './components/App'

ReactDOMClient.createRoot(document.querySelector('#root')).render(
    <App />
)