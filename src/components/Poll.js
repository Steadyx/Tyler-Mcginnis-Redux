import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
	render() {
		if (this.props.poll === null) {
			return <p>Poll does not exist</p>;
		}

		const { poll, vote, authorAvatar } = this.props;

		return (
			<div className="poll-container">
				<h1 className="question">{poll.question}</h1>
				<div className="poll-author">
					By <img src={authorAvatar} alt="Authors avatar" />
				</div>
				<ul>
					<li>
						{["aText", "bText", "cText", "dText"].map((key) => {
							return (
								<li className={`option ${vote === key[0] ? "chosen" : ""}`}>
									{vote === null ? poll[key] : <div />}
								</li>
							);
						})}
					</li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, polls, users }, { match }) {
	const { id } = match.params;

	const poll = polls[id];

	if (!poll) {
		return {
			poll: null
		};
	}

	const vote = ["aVotes", "bVotes", "cVotes", "dVotes"].reduce((vote, key) => {
		if (vote !== null) {
			return vote[0];
		}
		return poll[key].includes(authedUser) ? key : vote;
	}, null);

	return {
		poll,
		vote,
		authedUser,
		authorAvatar: users[poll.author].avatarURL
	};
}

export default connect(mapStateToProps)(Poll);
