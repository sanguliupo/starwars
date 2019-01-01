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
		if (this.props.show === true) {
			return (
				<div>
					{this.state.vehicles.map(vehicle => {
						return (
							<Card colorClass="vehiclesColor" data={vehicle} />
						);
					})}
				</div>
			);
		} else {
			return null;
		}
	}
}
export default Vehicles;
