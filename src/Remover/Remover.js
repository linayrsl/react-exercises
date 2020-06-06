import React, { Component } from 'react';
import './Remover.scss';

class Remover extends Component {

	constructor(props) {
		super(props);
		this.state = {
			students: [
				'Abby Mecoil',
				'Toni Zuck',
				'Peter Hanshfield',
				'Rose Tobernak'
			]
		};
	}

	deleteStudent(event) {
		const studentsUpdated = this.state.students.filter((student) => student !== event.target.value);
		this.setState({
			students: studentsUpdated
		});
	}

	render() {
		return (
			<div className="Remover">
				<h3>Remover:</h3>
				<p>Add a delete button for each student to remove it from the list.</p>
				<ul className="Remover__list">
					{this.state.students.map((student, index) => {
						return <li key={index}>{student}<button value={student} onClick={this.deleteStudent.bind(this)}>Delete</button></li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Remover;
