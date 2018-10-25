import React from 'react';
import {View, Text, FlatList, StyleSheet, RefreshControl} from 'react-native';
import {connect} from 'react-redux';

import {listCategories} from '../reducers/categories';
import Loading from './Loading';

class CategoryList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refreshing: false
		};
	}
	componentDidMount() {
		this.props.listCategories();
	}

	_onRefresh = () => {
		this.setState({
			refreshing: true,
		});

		this.props.listCategories().then(() => {
			this.setState({
				refreshing: false,
			})
		});
	}

	renderItem({item}) {
		return (
			<View style={styles.item}>
				<Text>{item.category_name}</Text>
			</View>
		)
	}

	render() {
		const {error, categories} = this.props;

		if (error) {
			return <Text>{error}</Text>;
		}

		if (this.props.loading) {
			return <Loading />;
		}

		return (
			<FlatList
				style={styles.container}
				data={categories}
				renderItem={this.renderItem}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this._onRefresh}
					/>
				}
			/>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		padding: 16,
		marginBottom: 10,
		backgroundColor: '#ccc'
	}
});

const mapStateToProps = state => {
	const categories = state.categories.data.map(cat => ({key: cat.category_id, ...cat}));
	return {
		...state.categories,
		categories,
	}
}

const mapDispatchToProps = {
	listCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
