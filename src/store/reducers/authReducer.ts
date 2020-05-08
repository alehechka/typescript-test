import {
	AuthActionTypes,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	SIGNOUT_SUCCESS,
	SIGNUP_ERROR,
	SIGNUP_SUCCESS,
} from '../types/authTypes';

const initState = {
	authError: null,
};

const authReducer = (state = initState, action: AuthActionTypes) => {
	switch (action.type) {
		case LOGIN_ERROR:
			return {
				...state,
				authError: action.err.message,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				authError: null,
			};
		case SIGNOUT_SUCCESS:
			return state;
		case SIGNUP_SUCCESS:
			return {
				...state,
				authError: null,
			};
		case SIGNUP_ERROR:
			return {
				...state,
				authError: action.err.message,
			};
		default:
			return state;
	}
};

export default authReducer;
