import _ from 'lodash';
import axios from 'axios';
import { SET_SEARCH_TERM, SET_SEARCH_RESULTS, SET_HEIGHT_FILTER,
	SET_WEAKNESS_FILTER, RESET_SEARCH, FETCH_POKEMONS, SET_ERROR, Search, Weakness, Height } from '../types';

const fetchPokemons = () => async dispatch => {
	const response = await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');

	dispatch({
		type: FETCH_POKEMONS,
		pokemons: response.data.pokemon
	});
};

const setSearchTerm = term => dispatch => {
	dispatch({
		type: SET_SEARCH_TERM,
		term
	});
};

const resetSearch = () => dispatch => {
	dispatch({
		type: RESET_SEARCH
	});
};

const setHeightFilter = (value, rangeType) => dispatch => {
	dispatch({
		type: SET_HEIGHT_FILTER,
		rangeType,
		value
	});
};

const setWeaknessFilter = weakness => dispatch => {
	dispatch({
		type: SET_WEAKNESS_FILTER,
		weaknessFilter: weakness
	});
};

const setError = error => dispatch => {
	dispatch({
		type: SET_ERROR,
		error
	});
};

const updateFilteredPokemons = filteredPokemons => dispatch => {
	dispatch({
		type: SET_SEARCH_RESULTS,
		searchResult: filteredPokemons
	});
};

const parseHeight = heightString => {
	return _.multiply(heightString.slice(0, -2), 100);
};

const filterPokemonsList = filterType => (dispatch, getState) => {
	const { pokemons, searchManager } = getState();
	const { heightFilter, weaknessFilter, term, error } = searchManager;
	const { min, max } = heightFilter;

	if (error) {
		dispatch(setError(false));
	}

	const filteredPokemons = _.filter(pokemons, function(o) {
		const isInSearch = _.includes(o.name, term) || _.includes(o.type, term);
		switch (filterType) {
			case Height:
				const minValue = min || 1;
				const maxValue = max || 900;
				return min || max ? isInSearch && (parseHeight(o.height) >= minValue && parseHeight(o.height) <= maxValue) : isInSearch;
			case Weakness:
				return weaknessFilter ? isInSearch && _.includes(o.weaknesses, weaknessFilter) : isInSearch;
			default:
				return isInSearch;
		}
	});

	if (filteredPokemons.length > 0) {
		dispatch(updateFilteredPokemons(filteredPokemons));
	} else {
		dispatch(setError(true));
	}
};

const searchTerm = () => dispatch => {
	dispatch(filterPokemonsList(Search));
};

const filterWeakness = weakness => dispatch => {
	dispatch(setWeaknessFilter(weakness));
	dispatch(filterPokemonsList(Weakness));
};

const filterHeight = () => dispatch => {
	dispatch(filterPokemonsList(Height));
};

export { fetchPokemons, searchTerm, filterWeakness, setSearchTerm, resetSearch, setHeightFilter, filterHeight };