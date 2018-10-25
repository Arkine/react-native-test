import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Header} from 'react-native-elements';

// import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryList from '../components/CategoryList';

export default class Main extends React.PureComponent {
	render() {
		return(
			<View style={styles.container}>
				<Header
					style={styles.header}
					leftComponent={{ icon: 'menu', color: '#fff' }}
					centerComponent={{ text: 'TEST APP', style: { color: '#fff' } }}
					rightComponent={{ icon: 'home', color: '#fff' }}
				/>
				<View style={styles.body}>
					<CategoryList />
				</View>

				<Footer style={styles.footer}>
					<Text>This is the footer</Text>
				</Footer>
			</View>
		);
	}
}

const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
	header: {
		flex: 1,
		width: W,
	},
	container: {
		flex: 1,
	},
	body: {
		padding: 16,
		flex: 1,
	},
	footer: {
		// flex: 1,
		width: W,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
		backgroundColor: 'red',
	}
});