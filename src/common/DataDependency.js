import {connect} from 'react-redux';
/**
 * Data Dependency loader. Loads data onto the component it wraps
 * @param {string} key
 * @param {dependencies} {get, load}
 */
export default function DataDependency(key, {get, load}) {
	const getStateName= `__${key}__getState`;
	const loadName = `__${key}__load`;

	const mapStateToProps = (state, ownProps) => ({
		[key]: get(state, ownProps),
		[getStateName]: () => state
	});

	const mapDispatchToProps = (dispatch, ownProps) => ({
		[loadName]: (state) => load(state, dispatch, ownProps)
	});

	return (target) => {
		let componentDidMount = target.prototype.componentDidMount;

		target.prototype.componentDidMount = function(...args) {
			const state = this.props[getStateName]();
			this.props[loadName](state);

			if (componentDidMount != null) {
				return componentDidMount.apply(this, args);
			}
		};

		return connect(mapStateToProps, mapDispatchToProps)(target);
	}
}