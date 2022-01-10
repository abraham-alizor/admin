import React from 'react';
// react plugin for creating notifications over the dashboard
import NotificationAlert from 'react-notification-alert';
// react-bootstrap components
import {
	Alert,
	Badge,
	Button,
	Card,
	Modal,
	Navbar,
	Nav,
	Container,
	Row,
	Col,
} from 'react-bootstrap';

function Notifications() {
	const [showModal, setShowModal] = React.useState(false);
	const notificationAlertRef = React.useRef(null);
	const notify = (place) => {
		var color = Math.floor(Math.random() * 5 + 1);
		var type;
		switch (color) {
			case 1:
				type = 'primary';
				break;
			case 2:
				type = 'success';
				break;
			case 3:
				type = 'danger';
				break;
			case 4:
				type = 'warning';
				break;
			case 5:
				type = 'info';
				break;
			default:
				break;
		}
		var options = {};
		options = {
			place: place,
			message: (
				<div>
					<div>
						Welcome to <b>Light Bootstrap Dashboard React</b> - a beautiful freebie for every web
						developer.
					</div>
				</div>
			),
			type: type,
			icon: 'nc-icon nc-bell-55',
			autoDismiss: 7,
		};
		notificationAlertRef.current.notificationAlert(options);
	};
	return (
		<>
			<div className='rna-container'>
				<NotificationAlert ref={notificationAlertRef} />
			</div>
			<Container fluid>
				<Card>
					<Card.Header>
						<Card.Title as='h4'>Notifications</Card.Title>
					</Card.Header>
				</Card>
			</Container>
		</>
	);
}

export default Notifications;
