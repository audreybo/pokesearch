import { FETCH_POKEMONS } from '../types';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_POKEMONS:
			return [...state, ...action.pokemons];
		default:
			return state;
	}
};