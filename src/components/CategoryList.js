import React from 'react';
import {View, Text, FlatList, StyleSheet, Image, RefreshControl} from 'react-native';
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
			});
		});
	}

	renderItem({item}) {
		const imageStyle = {
			backgroundColor: 'orange'
		}

		if (item.category_image) {
			imageStyle.uri = item.category_image;
		}

		return (
			<View style={styles.item}>
				<Image source={imageStyle} style={styles.itemImage}/>
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
		flexDirection: 'row',
		alignItems: 'center',
		padding: 16,
		marginBottom: 10,
		backgroundColor: '#ccc',
	},
	itemImage: {
		height: 100,
		width: 100,
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
