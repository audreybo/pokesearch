import { combineReducers } from 'redux';
import pokemonsReducer from './pokemonsReducer';
import searchReducer from './searchReducer';

export default combineReducers({
	pokemons: pokemonsReducer,
	searchManager: searchReducer
});