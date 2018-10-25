import React from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';

import {createAppStore} from './src/store';
import reducers from './src/reducers';
import Main from './src/containers/Main';

// Creates the configuration for our Axios calls
const client = axios.create({
	baseURL: 'http://warehouse.firstimpressionsecuritydoors.com/ipad_api/data/',
	responseType: 'json',
});

// Create the app store
const store = createAppStore(reducers, client);

export default class App extends React.PureComponent {

	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}