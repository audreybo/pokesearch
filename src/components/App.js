import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';
import PokemonList from './Pokemons/PokemonList';
import SearchField from './Search/SearchField';
import WeaknessFilter from './Search/WeaknessFilter';
import HeightFilter from './Search/HeightFilter/';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchPokemons();
	}

	render () {
		return (
			<div className="ui container">
				<div className="ui top attached three item menu">
					<SearchField />
					<WeaknessFilter />
					<HeightFilter />
				</div>
				<div className="ui bottom attached segment">
					<PokemonList />
				</div>
			</div>
		);
	}
}

export default connect(null, { fetchPokemons })(App);