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
		if (this.props.show === true) {
			return (
				<div>
					{this.state.planets.map(planet => {
						return <Card colorClass="planetsColor" data={planet} />;
					})}
				</div>
			);
		} else {
			return null;
		}
	}
}
export default Planets;
