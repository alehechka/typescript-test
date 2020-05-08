import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

interface Props {
	signOut: () => void;
	profile: {
		initials: string;
	};
}

const SignedInLinks = (props: Props) => {
	return (
		<ul className='right'>
			<li>
				<NavLink to='/create'>New Project</NavLink>
			</li>
			<li>
				<NavLink to='/' onClick={props.signOut}>
					Logout
				</NavLink>
			</li>
			<li>
				<NavLink to='/' className='btn btn-floating pink lighten-1'>
					{props.profile.initials}
				</NavLink>
			</li>
		</ul>
	);
};

const mapDispatchToProps = (dispatch: (action: any) => any) => {
	return {
		signOut: () => dispatch(signOut()),
	};
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
