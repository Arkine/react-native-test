import {createStore, applyMiddleware} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import {createLogger} from 'redux-logger';

const logger = createLogger();

// For adding offline support, see: http://nobrok.com/making-react-native-app-offline-ready-in-2-mins/
// https://blog.cloudboost.io/getting-started-with-react-native-and-redux-6cd4addeb29

export const createAppStore = (reducer, client) => createStore(reducer, applyMiddleware(axiosMiddleware(client)), applyMiddleware(logger));