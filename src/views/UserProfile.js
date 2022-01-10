import React from 'react';

// react-bootstrap components
import { Badge, Button, Card, Form, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

function User() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col md='8'>
						<Card>
							<Card.Header>
								<Card.Title as='h4'>Edit Profile</Card.Title>
							</Card.Header>
							<Card.Body>Welcome to profile</Card.Body>
						</Card>
					</Col>
					<Col md='4'>
						<Card className='card-user'>
							<div className='card-image'>
								<img
									alt='...'
									src={require('assets/img/photo-1431578500526-4d9613015464.jpeg').default}
								></img>
							</div>
							<Card.Body>
								<div className='author'>
									<a href='#pablo' onClick={(e) => e.preventDefault()}>
										<img
											alt='...'
											className='avatar border-gray'
											src={require('assets/img/faces/profile.jpg').default}
										></img>
										<h5 className='title'>Abraham Alizor</h5>
									</a>
									<p className='description'>Frontend and Mobile app Developer</p>
								</div>
								<p className='description text-center'>
									"REACT Lover <br></br>I love React Library <br></br>
									Never lose focus of Javascript
								</p>
							</Card.Body>
							<hr></hr>
							<div className='button-container mr-auto ml-auto'>
								<Button
									className='btn-simple btn-icon'
									href='#pablo'
									onClick={(e) => e.preventDefault()}
									variant='link'
								>
									<i className='fab fa-facebook-square'></i>
								</Button>
								<Button
									className='btn-simple btn-icon'
									href='#pablo'
									onClick={(e) => e.preventDefault()}
									variant='link'
								>
									<i className='fab fa-twitter'></i>
								</Button>
								<Button
									className='btn-simple btn-icon'
									href='#pablo'
									onClick={(e) => e.preventDefault()}
									variant='link'
								>
									<i className='fab fa-google-plus-square'></i>
								</Button>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default User;
