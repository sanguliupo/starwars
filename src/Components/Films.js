import React from 'react';
import Card from './Card';
class Films extends React.Component {
	constructor() {
		super();
		this.state = { films: [] };
	}

	componentDidMount() {
		fetch(`https://swapi.co/api/films/`)
			.then(response => response.json())
			.then(users => {
				this.setState({ films: users.results });
			});
	}

	render() {
		if (this.props.show === true) {
			return (
				<div>
					{this.state.films.map(film => {
						return <Card colorClass="filmsColor" data={film} />;
					})}
				</div>
			);
		} else {
			return null;
		}
	}
}
export default Films;
