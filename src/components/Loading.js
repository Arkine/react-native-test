import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Loading extends React.PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
		width: '100%',
		backgroundColor: 'green'
	}
})