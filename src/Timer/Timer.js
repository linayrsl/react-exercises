import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timer: 0
		};
	}

	startTimer() {
		this.timer = setInterval(() => this.updateTimer(), 1000);
	}

	updateTimer() {
		this.setState({
			timer: this.state.timer + 1
		});
	}

	stopTimer() {
		clearInterval(this.timer);
	}

	refreshTimer() {
		this.setState({
			timer: 0
		});
	}

	render() {
		return (
			<div className="Timer">
				<h3>Timer</h3>
				<ul className="Timer__explanation">
					<li><b>Play:</b> the timer should count the seconds and keep updating</li>
					<li><b>Pause:</b> the timer freeze the timer</li>
					<li><b>Reset:</b> should set the timer to 0</li>
				</ul>
				<div className="Timer__actions">
					<button onClick={this.startTimer.bind(this)}>Play</button>
					<button onClick={this.stopTimer.bind(this)}>Pause</button>
					<button onClick={this.refreshTimer.bind(this)}>Reset</button>
				</div>
				<div className="Timer__value">{this.state.timer}</div>
			</div>
		)
	}
}

export default Timer;
