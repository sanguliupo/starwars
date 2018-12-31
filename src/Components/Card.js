import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div
				key={this.props.data.url}
				className={`cardStyle ${this.props.colorClass}`}
			>
				{JSON.stringify(this.props.data)}
			</div>
		);
	}
}

export default Card;
