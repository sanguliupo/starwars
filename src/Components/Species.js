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
		let filteredCards;

		if (this.props.show === true) {
			if (this.state.species.length > 0) {
				filteredCards = this.state.species.filter(species => {
					return species.name
						.toLowerCase()
						.includes(this.props.searchfield.toLowerCase());
				});

				return (
					<div>
						{filteredCards.map(species => {
							return (
								<Card
									colorClass="speciesColor"
									data={species}
								/>
							);
						})}
					</div>
				);
			}
		} else {
			return null;
		}
	}
}
export default Species;
