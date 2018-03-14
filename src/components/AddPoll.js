import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";

class AddPoll extends Component {
	state = {
		question: "",
		a: "",
		b: "",
		c: "",
		d: ""
	};

	handleInputChange = (e) => {
		const { value, name } = e.target;

		this.setState(() => ({
			[name]: value
		}));
	};

	isDisabled = () => {
		const { question, a, b, c, d } = this.state;

		return question === "" || a === "" || b === "" || c === "" || d === "";
	};
	handleSubmit = (e) => {
		e.preventDefault();

		console.log("add poll", this.state);
		this.props.dispatch(handleAddPoll(this.state));
	};
	render() {
		const { question, a, b, c, d } = this.state;

		return (
			<form className="add-form" onSubmit={this.handleSubmit}>
				<h3 style={{ marginBottom: 5 }}>What is your question?</h3>
				<input
					value={question}
					onChange={this.handleInputChange}
					name="question"
					className="input"
					id="question"
					type="text"
				/>
				<h3>What are the options?</h3>

				<label htmlFor="a" className="label">
					A.
				</label>
				<input
					value={a}
					onChange={this.handleInputChange}
					name="a"
					className="input"
					id="a"
					type="text"
				/>
				<label htmlFor="b" className="label">
					B.
				</label>
				<input
					type="text"
					value={b}
					onChange={this.handleInputChange}
					name="b"
					className="input"
					id="b"
				/>
				<label htmlFor="a" className="label">
					C.
				</label>
				<input
					type="text"
					value={c}
					onChange={this.handleInputChange}
					name="c"
					className="input"
					id="c"
				/>
				<label htmlFor="a" className="label">
					D.
				</label>
				<input
					type="text"
					value={d}
					onChange={this.handleInputChange}
					name="d"
					className="input"
					id="d"
				/>
				<button className="btn" type="submit" disabled={this.isDisabled()}>
					Submit
				</button>
			</form>
		);
	}
}

export default connect()(AddPoll);
