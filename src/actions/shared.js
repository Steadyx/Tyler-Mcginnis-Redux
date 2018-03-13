import { getInitialData } from "../utils/api";
import { recievePolls } from "./polls";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTH_ID = "tylermcginnis";

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, polls }) => {
			dispatch(receiveUsers(users));
			dispatch(recievePolls(polls));
			dispatch(setAuthedUser(AUTH_ID));
			dispatch(hideLoading());
		});
	};
}
