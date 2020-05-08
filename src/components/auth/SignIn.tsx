import React from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import CredentialsModel from '../../models/Credentials';
import { useForm } from 'react-hook-form';

interface Props {
	authError: string;
	auth: any;
	signIn: (creds: CredentialsModel) => any;
}

export const SignIn = (props: Props) => {
	const { handleSubmit, register, errors, formState } = useForm<CredentialsModel>({ mode: 'onChange' });

	const onSubmit = (values: CredentialsModel) => {
		props.signIn(values);
	};

	if (props.auth.uid) {
		return <Redirect to='/' />;
	}
	return (
		<div className='container'>
			<form className='white' onSubmit={handleSubmit(onSubmit)}>
				<h5 className='grey-text text-darken-3'>Sign In</h5>
				<div className='input-field'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						name='email'
						ref={register({
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'invalid email address',
							},
						})}
					/>
					{errors.email && errors.email.message}
				</div>
				<div className='input-field'>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' name='password' ref={register({ required: true })} />
				</div>
				<div className='input-field'>
					<button type='submit' disabled={!formState.isValid} className='btn pink lighten-1 z-depth-0'>
						Login
					</button>
					<div className='red-text center'>{props.authError && <p>{props.authError}</p>}</div>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state: RootStateOrAny) => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError,
	};
};

const mapDispatchToProps = (dispatch: (action: any) => any) => {
	return {
		signIn: (creds: CredentialsModel) => dispatch(signIn(creds)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
