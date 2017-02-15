import React, {Component} from 'react';

export default class extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const puppies = this.props.allPuppies;
		
		return (
			<div className="container flexbox-container">
				<div className="jumbotron">
					<ul className="list-unstyled">
						{
							puppies && puppies.map(pup => (
								<li key={pup.id}><a href="#">{pup.name}</a></li>	
							))
						}
					</ul>
				</div>
			</div>
		);
	}
}
