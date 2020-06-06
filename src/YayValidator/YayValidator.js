import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: ""
		};
	}

	changeInputColor(event) {
		const text = event.target.value;
		if (text.includes("yay")) {
			this.setState({
				color: "green"
			});
		} else {
			this.setState({
				color: ""
			});
		}
	}

	render() {
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input
					onChange={this.changeInputColor.bind(this)}
					style={{backgroundColor: this.state.color}}
					type="text" className="text-box" />
			</div>
		)
	}
}

export default YayValidator;
