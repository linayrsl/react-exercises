import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			filter: ""
		};
	}

	updateFilter(event) {
		this.setState({
			filter: event.target.value
		});
	}

	render() {
		return (
			<div className="Filter">
				<p>Filter the list as you type.</p>
				<input onChange={this.updateFilter.bind(this)} placeholder="Search..." className="Filter__textbox" />
				<ul>
					{this.state.items
						.filter(item => item.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)
						.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
				</ul>
			</div>
		)
	}
}

export default Filter;
