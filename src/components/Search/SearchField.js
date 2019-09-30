import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { searchTerm, setSearchTerm, resetSearch } from '../../actions';

const onSubmitForm = (e, props) => {
	const { searchTerm } = props;

	e.preventDefault();
	searchTerm();
};

const SearchField = props => {
	const { term, setSearchTerm, resetSearch } = props;

	return (
		<div className="item">
			<form onSubmit={e => onSubmitForm(e, props)} className="ui form input right icon" style={{ width: '200px' }}>
				<input
					type='text'
					placeholder='Search by name or type'
					value={term}
					onChange={e => setSearchTerm(_.capitalize(e.target.value))}
				/>
				{term &&
					<i onClick={() => resetSearch()} className="times icon grey link" />
				}
			</form>
		</div>
	);
};

const mapStateToProps = state => {
	const { term } = state.searchManager;
	return { term };
};

export default connect(mapStateToProps, { searchTerm, setSearchTerm, resetSearch })(SearchField);