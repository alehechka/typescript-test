import React from 'react';
import moment from 'moment/moment';
import NotificationModel from '../../models/Notification';

interface Props {
	notifications: [NotificationModel];
}

const Notifications = ({ notifications }: Props) => {
	return (
		<div className='section'>
			<div className='card z-depth-0'>
				<div className='card-content'>
					<span className='card-title'>Notifications</span>
					<ul className='notifications'>
						{notifications &&
							notifications.map((item) => (
								<li key={item.id}>
									<span className='pink-text'>{item.user} </span>
									<span>{item.content}</span>
									<div className='grey-text note-date'>{moment(item.time.toDate()).fromNow()}</div>
								</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Notifications;
