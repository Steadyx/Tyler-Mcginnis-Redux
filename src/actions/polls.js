import { savePoll } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECIEVE_POLLS = "RECIEVE_POLLS";
export const ADD_POLL = "ADD_POLL";

export function addPoll(poll) {
	return {
		type: ADD_POLL,
		poll
	};
}

export function handleAddPoll(poll) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());
		return savePoll({
			...poll,
			author: authedUser
		})
			.then((poll) => dispatch(addPoll(poll)))
			.then(() => dispatch(hideLoading()));
	};
}

// export function handleAddPoll(poll) {
// 	return (dispatch, getState) => {
// 		const { authedUser } = getState();
//
// 		dispatch(showLoading());
// 		return savePoll({
// 			...poll,
// 			author: authedUser
// 		})
// 			.then((poll) => dispatch(addPoll(poll)))
// 			.then(() => dispatch(hideLoading()));
// 	};
// }

export function recievePolls(polls) {
	return {
		type: RECIEVE_POLLS,
		polls
	};
}
