import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import LoadingBar from "react-redux-loading-bar";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		return (
			<div>
				<LoadingBar />
				{this.props.loading === true ? null : <Leaderboard />}
			</div>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(App);
