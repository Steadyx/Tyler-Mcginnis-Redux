export const RECIEVE_POLLS = "RECIEVE_POLLS";

export function recievePolls(polls) {
	return {
		type: RECIEVE_POLLS,
		polls
	};
}
