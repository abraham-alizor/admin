import React from 'react';

// react-bootstrap components
import { Card, Container, Row, Col } from 'react-bootstrap';

function Upgrade() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col className='ml-auto mr-auto' md='8'>
						<Card>
							<div className='header text-center'>
								<h4 className='title'>Settings</h4>
								<p className='category'>set Admin privileges</p>
								<br></br>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Upgrade;
