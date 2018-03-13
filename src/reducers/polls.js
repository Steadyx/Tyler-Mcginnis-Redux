import { RECIEVE_POLLS } from "../actions/polls";

export default function polls(state = {}, action) {
	switch (action.type) {
		case RECIEVE_POLLS:
			return {
				...state,
				...action.polls
			};
		default:
			return state;
	}
}
