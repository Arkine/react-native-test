import React from 'react';
import {connect} from 'react-redux';

export const withData = (dispatcher, WrappedComponent) => {
	return class withData extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				loading: false,
				data: null
			}
		}

		componentDidMount() {
			this.setState({
				loading: true,
			});
		}
	}
}