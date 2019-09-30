import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { filterWeakness } from '../../actions';
import { PokemonTypes } from '../../types';
import '../../css/index.scss';

class WeaknessFilter extends React.Component {
	setSelection = value => {
		const filter = value ? value.value : '';
		this.props.filterWeakness(filter);
	};

	getOptions = () => {
		return PokemonTypes.map(type => {
			return { value: type, label: type};
		});
	};

	render() {
		const { weaknessFilter } = this.props;
		const value = weaknessFilter ? { label: weaknessFilter } : '';

		return (
			<div className="item">
				<Select
					value={value}
					onChange={this.setSelection}
					isClearable={true}
					options={this.getOptions()}
					placeholder="Filter by Weakness"
					className="select-weakness"
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { weaknessFilter } = state.searchManager;
	return { weaknessFilter };
};

export default connect(mapStateToProps, { filterWeakness })(WeaknessFilter);