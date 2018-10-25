
export const GET_CATEGORIES = 'test-app/categories/LOAD';
export const GET_CATEGORIES_SUCCESS = 'test-app/categories/LOAD_SUCCESS';
export const GET_CATEGORIES_FAIL = 'test-app/categories/LOAD_FAIL';

const initialState =  {
	data: [],
	fetched: Date.now(),
};

/**
 * This reducer follows the DUCKS pattern to simplify the state management
 */

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_CATEGORIES:
			return { ...state, loading: true };
		case GET_CATEGORIES_SUCCESS:
			return { ...state, loading: false, data: action.payload.data };
		case GET_CATEGORIES_FAIL:
			return {
				...state,
				loading: false,
				error: 'Error while fetching categories'
			};
		default:
			return state;
	}
}

export function listCategories() {
	return {
		type: GET_CATEGORIES,
		payload: {
			request: {
				url: 'category'
			}
		}
	};
}