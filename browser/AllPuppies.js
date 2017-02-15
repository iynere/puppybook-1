import React, {Component} from 'react';

export default class extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="container flexbox-container">
				<div className="jumbotron">
					<ul className="list-unstyled">
						{ this.props.allPuppies &&
							this.props.allPuppies.map(pup => (
								<li key={pup.id}><a href="#">{pup.name}</a></li>	
							))
						}
					</ul>
				</div>
			</div>
		);
	}
}
