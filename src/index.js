import React from 'react';

import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import cocktailReducer from './redux/reducers';
import { Provider } from 'react-redux';
const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(
    cocktailReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//store -> globlalized state
//action -> namn på vad du ska göra
//reducer -> checkar vilken action du gör och updaterar store 
//dispatch -> execute action till reducer
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);