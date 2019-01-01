import React from 'react';
import Card from './Card';
class People extends React.Component {
	constructor() {
		super();
		this.state = { people: [] };
	}

	componentDidMount() {
		fetch(`https://swapi.co/api/people/`)
			.then(response => response.json())
			.then(users => {
				this.setState({ people: users.results });
			});
	}

	render() {
		if (this.props.show === true) {
			return (
				<div>
					{this.state.people.map(person => {
						return <Card colorClass="peopleColor" data={person} />;
					})}
				</div>
			);
		} else {
			return null;
		}
	}
}
export default People;


