import React from 'react';
import {Link} from 'react-router';

export default props => {
	const puppies = props.allPuppies;
		
	return (
		<div className="container flexbox-container">
			<div className="jumbotron">
				<ul className="list-unstyled">
					{
						puppies && puppies.map(pup => (
							<li key={pup.id}><a href={`#/puppies/${pup.id}`}>{pup.name}</a></li>	
						))
					}
				</ul>
			</div>
		</div>
	);
}
