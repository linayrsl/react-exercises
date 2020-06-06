import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: [],
			coldTemp: "",
			hotTemp: ""
		};
	}

	findColdDay() {
		const sortedDays = this.state.days.sort(function (a, b) {
			return a.temperature - b.temperature;
		});
		this.setState({
			coldTemp: sortedDays[0].temperature,
			hotTemp: sortedDays[sortedDays.length - 1].temperature
		});
	}

	componentDidMount() {
		fetch("https://my-json-server.typicode.com/evyros/react-weather-app/forecast")
			.then((data) => data.json())
			.then((days) => {
				console.log(days);
				this.setState({
					days
				});
				this.findColdDay();
			});
	}

	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://my-json-server.typicode.com/evyros/react-weather-app/forecast</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is: </strong>{this.state.coldTemp}
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is: </strong>{this.state.hotTemp}
				</div>
			</div>
		)
	}
}

export default Weather;
