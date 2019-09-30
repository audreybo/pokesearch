import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { setHeightFilter, filterHeight } from '../../../actions';
import '../../../css/index.scss';

const setRange = (e, props) => {
	const { setHeightFilter, rangeType } = props;
	e.preventDefault();
	setHeightFilter(e.target.value, rangeType);
};

const HeightFilter = props => {
	const { rangeType, value, filterHeight } = props;

	return (
		<div className="ui right labeled input small">
			<label htmlFor={rangeType} className="ui label">{_.capitalize(rangeType)}</label>
			<input
				id={rangeType}
				type='number'
				value={value}
				onChange={e => setRange(e, props)}
				onBlur={() => filterHeight()}
				className="select-height"
			/>
			<div className="ui basic label">cm</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { heightFilter } = state.searchManager;
	return { value: heightFilter[ownProps.rangeType] };
};

export default connect(mapStateToProps, { setHeightFilter, filterHeight })(HeightFilter);