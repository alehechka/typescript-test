import React from 'react';
// import Notifications from "./Notifications";
import ProjectList from '../projects/ProjectList';
import ProjectModel from '../../models/Project';
import { connect, RootStateOrAny } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Notifications from './Notifications';
import NotificationModel from '../../models/Notification';

interface Props {
	projects: [ProjectModel];
	notifications: [NotificationModel];
}

class Dashboard extends React.Component<Props> {
	render() {
		return (
			<div className='dashboard container'>
				<div className='row'>
					<div className='col s12 m6'>
						<ProjectList projects={this.props.projects} />
					</div>
					<div className='col s12 m5 offset-m1'>
						<Notifications notifications={this.props.notifications} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: RootStateOrAny) => {
	return {
		projects: state.firestore.ordered.projects,
		notifications: state.firestore.ordered.notifications,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'projects', orderBy: ['createdAt', 'desc'] },
		{ collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
	])
)(Dashboard);
