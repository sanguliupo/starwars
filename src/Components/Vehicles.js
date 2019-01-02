import React from 'react';
import Card from './Card';
class Vehicles extends React.Component {
	constructor() {
		super();
		this.state = { vehicles: [] };
	}

	componentDidMount() {
		fetch(`https://swapi.co/api/vehicles/`)
			.then(response => response.json())
			.then(users => {
				this.setState({ vehicles: users.results });
			});
	}

	render() {
		let filteredCards;

		if (this.props.show === true) {
			if (this.state.vehicles.length > 0) {
				filteredCards = this.state.vehicles.filter(vehicle => {
					return vehicle.name
						.toLowerCase()
						.includes(this.props.searchfield.toLowerCase());
				});

				return (
					<div>
						{filteredCards.map(vehicles => {
							return (
								<Card
									colorClass="vehiclesColor"
									data={vehicles}
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
export default Vehicles;
