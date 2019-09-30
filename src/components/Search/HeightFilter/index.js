import React from 'react';
import HeightInput from './Input';

const HeightFilter = () => {
	return (
		<div className="item">
			<HeightInput rangeType={'min'} />
			<HeightInput rangeType={'max'} />
		</div>
	);
};

export default HeightFilter;