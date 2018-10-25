import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export default class Header extends React.PureComponent {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Text>Header here</Text>
				</View>
			</View>
		);
	}
}

const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: 100,
		width: W,
		marginBottom: 20,
		backgroundColor: 'yellow',
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	},
	header: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: 'red',
	}
})