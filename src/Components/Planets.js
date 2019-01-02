import React from 'react';
import Card from './Card';
class Planets extends React.Component {
	constructor() {
		super();
		this.state = { planets: [] };
	}

	componentDidMount() {
		fetch(`https://swapi.co/api/planets/`)
			.then(response => response.json())
			.then(users => {
				this.setState({ planets: users.results });
			});
	}

	render() {
		let filteredCards;

		if (this.props.show === true) {
			if (this.state.planets.length > 0) {
				filteredCards = this.state.planets.filter(planet => {
					return planet.name
						.toLowerCase()
						.includes(this.props.searchfield.toLowerCase());
				});

				return (
					<div>
						{filteredCards.map(planets => {
							return (
								<Card
									colorClass="planetsColor"
									data={planets}
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
export default Planets;
