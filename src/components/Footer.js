import React from 'react';
import {View, Text} from 'react-native';

export default class Footer extends React.PureComponent {
	render() {
		return (
			<View {...this.props}>
				{this.props.children}
			</View>
		);
	}
}