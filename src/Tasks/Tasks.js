import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.inputValue = React.createRef();
	}

	addTodo(event) {
		const todo = this.inputValue.current.value;
		this.setState({
			todos: [...this.state.todos, todo]
		});
	}

	render() {
		return (
			<div className="Tasks">
				<h3>Tasks:</h3>
				<p>Make a Todo list (add only):</p>
				<input ref={this.inputValue} placeholder="Your task..." /> <button onClick={this.addTodo.bind(this)}>Add task</button>
				{this.state.todos ? <ul>{this.state.todos.map((todo) => <li>{todo}</li>)}</ul> : null}
			</div>
		)
	}
}

export default Tasks;
