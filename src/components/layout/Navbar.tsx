import * as React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

interface NavbarProps {
	auth: any;
	profile: {
		initials: string;
	};
}

const Navbar = (props: NavbarProps) => {
	const links = props.auth.uid ? <SignedInLinks profile={props.profile} /> : <SignedOutLinks />;
	return (
		<nav className='nav-wrapper grey darken-3'>
			<div className='container'>
				<Link to='/' className='brand-logo'>
					Mario Plan
				</Link>
				{links}
			</div>
		</nav>
	);
};

const mapStateToProps = (state: any) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
	};
};

export default connect(mapStateToProps)(Navbar);
