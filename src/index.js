// Import React component
import App from './js/components/App';

// Import loadState to read from our browser's local storage
import { loadState } from './js/state/localStorage';

// Import React and Redux
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Import our initial state for first time load
import AppReducer, { initialState } from './js/state/AppReducer';
import { createRoot } from 'react-dom/client';

// Configuring Redux Store
const setupStore = () => {
    // Getting state from local storage - browser's storage
    let persistedState = loadState();
    if (!persistedState) {
        persistedState = initialState;
    }
    const store = configureStore({
        reducer: AppReducer,
        preloadedState: persistedState,
    });
    return store;
};

const store = setupStore();

const root = createRoot(document.getElementById('resume-app'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
