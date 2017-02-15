import React from 'react';

export default props => {
	const pup = props.selectedPup;
	
	return (
		<div>
			<h2>{pup && pup.name}</h2>
			<div>
				<img src={pup && pup.image} />
			</div>
		</div>
	);
};
