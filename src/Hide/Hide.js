import React, { Component } from 'react';
import './Hide.scss';

class Hide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShown: true
		};
	}

	hideText() {
		this.setState({
			isShown: !this.state.isShown
		});
	}

	render() {
		return (
			<div className="Hide">
				<button onClick={this.hideText.bind(this)}>Hide text now!</button>
				<p>
					{this.state.isShown ? "You can read this text,\n" +
						"\t\t\t\t\tbut if you click the button it should disappear. Forever." : ""}
				</p>
			</div>
		)
	}
}

export default Hide;
