import React from 'react';
import Card from './Card';
class Species extends React.Component {
	constructor() {
		super();
		this.state = { species: [] };
	}

	componentDidMount() {
		fetch(`https://swapi.co/api/species/`)
			.then(response => response.json())
			.then(users => {
				this.setState({ species: users.results });
			});
	}

	render() {
		if (this.props.show === true) {
			return (
				<div>
					{this.state.species.map(species => {
						return (
							<Card colorClass="speciesColor" data={species} />
						);
					})}
				</div>
			);
		} else {
			return null;
		}
	}
}
export default Species;
