export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

interface LoginAction {
	type: typeof LOGIN_SUCCESS;
}

interface LoginActionError {
	type: typeof LOGIN_ERROR;
	err: Error;
}

interface SignoutAction {
	type: typeof SIGNOUT_SUCCESS;
}

interface SignupAction {
	type: typeof SIGNUP_SUCCESS;
}

interface SignupActionError {
	type: typeof SIGNUP_ERROR;
	err: Error;
}

export type AuthActionTypes =
	| LoginAction
	| LoginActionError
	| SignoutAction
	| SignupAction
	| SignupActionError;
