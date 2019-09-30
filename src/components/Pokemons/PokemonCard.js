import React from 'react';

const renderDataList = list => list.map(item => <div key={item}>{item}</div>);

const PokemonCard = ({ pokemon }) => {
	return (
		<div className="card">
			<div className="ui image small centered">
				<img src={pokemon.img} alt={pokemon.name} />
			</div>

			<div className="content">
				<div className="ui header centered">{pokemon.name}</div>
				<div className="ui horizontal segments">
					<div className="ui segment">
						<h5 className="ui sub header">Height</h5>
						<div>{pokemon.height}</div>
						<h5 className="ui sub header">Weight</h5>
						<div>{pokemon.weight}</div>
					</div>
					<div className="ui segment">
						<div className="ui sub header">Types</div>
							{renderDataList(pokemon.type)}
						<h5 className="ui sub header">Weaknesses</h5>
							{renderDataList(pokemon.weaknesses)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;