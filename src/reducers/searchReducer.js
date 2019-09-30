import { SET_SEARCH_TERM, SET_SEARCH_RESULTS, SET_HEIGHT_FILTER,
	SET_WEAKNESS_FILTER, RESET_SEARCH, SET_ERROR } from '../types';

const INITIAL_STATE = {
	term: '',
	searchResult: [],
	heightFilter: {
		min: '',
		max: ''
	},
	weaknessFilter: '',
	error: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return { ...state, term: action.term };
		case SET_SEARCH_RESULTS:
			return { ...state, searchResult: action.searchResult };
		case SET_WEAKNESS_FILTER:
			return { ...state, weaknessFilter: action.weaknessFilter };
		case SET_HEIGHT_FILTER:
			return { ...state, heightFilter:
				{ ...state.heightFilter, [action.rangeType]: action.value }
			};
		case RESET_SEARCH:
			return { ...state, ...INITIAL_STATE };
		case SET_ERROR:
				return { ...state, error: action.error };
		default:
			return state;
	}
};