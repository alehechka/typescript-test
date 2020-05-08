import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

interface PrivateRouteProps extends RouteProps {
	// tslint:disable-next-line:no-any
	component?: any;
	children?: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
	const { component: Component, children, ...rest } = props;
	const auth = useSelector((state: any) => state.firebase.auth);
	return (
		<Route
			{...rest}
			render={(routeProps) =>
				isLoaded(auth) && !isEmpty(auth) ? (
					children || <Component {...routeProps} />
				) : (
					<Redirect
						to={{
							pathname: '/signin',
							state: { from: routeProps.location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
