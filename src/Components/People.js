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

//  {this.state.people.map((user, i) => {
//   return (
//     <Card
//       key={i}
//       color={`rgb(160,${Math.round(Math.random() * 150)},${i + 70})`}
//       name={`Name: ${this.state.people[i].name}`}
//       hair_color={`Hair colors: ${this.state.people[i].hair_color}`}
//       skin_color={`Skin colors: ${this.state.people[i].skin_color}`}
//     />
//   );
// })}
