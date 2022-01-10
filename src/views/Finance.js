import React from 'react';

// react-bootstrap components
import { Card, Container, Row, Col } from 'react-bootstrap';

function Finance() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col md='12'>
						<Card>
							<Card.Header>
								<Card.Title as='h4'>Finance Management</Card.Title>
								<p className='card-category'>View financial details and analysis </p>
							</Card.Header>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Finance;
