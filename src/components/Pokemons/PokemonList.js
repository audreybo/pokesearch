import React from 'react';
import { connect } from 'react-redux';
import PokemonCard from './PokemonCard';

const renderPokemonList = pokemons => {
	return pokemons.map(pokemon => {
		return (
			<PokemonCard
				key={pokemon.name}
				pokemon={pokemon}
			/>
		);
	});
};

const PokemonList = ({ pokemons, error }) => {
	if (error) {
		return <span>No pokemon was found</span>;
	}

	return (
		<div className="ui centered cards">
			{renderPokemonList(pokemons)}
		</div>
	);
};

const mapStateToProps = state => {
	const { pokemons, searchManager } = state;
	const { searchResult, error } = searchManager;

	return { pokemons: searchResult.length > 0 ? searchResult : pokemons, error };
};

export default connect(mapStateToProps)(PokemonList);