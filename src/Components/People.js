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
		let filteredCards;

		if (this.props.show === true) {
			if (this.state.people.length > 0) {
				filteredCards = this.state.people.filter(person => {
					return person.name
						.toLowerCase()
						.includes(this.props.searchfield.toLowerCase());
				});

				return (
					<div>
						{filteredCards.map(people => {
							return (
								<Card colorClass="peopleColor" data={people} />
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
export default People;
