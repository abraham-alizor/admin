import React, { useState } from 'react';
import ChartistGraph from 'react-chartist';
// react-bootstrap components
import { Card, Container, Row, Col, Badge, Button, Form, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';

axios({
	method: 'post',
	url: 'https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
	data: {
		name: 'jjjj',
		email: '',
		location: '',
		mobile: '',
		subscription: '',
		serviceRendered: '',
	},
});

function Dashboard() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [location, setLocation] = useState();
	const [mobile, setMobile] = useState();
	const [subscription, setSubscription] = useState();
	const [serviceRendered, setServiceRendered] = useState();

	const handleChangeName = (event) => {
		setName({ name: event.target.value });
	};
	const handleChangeEmail = (event) => {
		setEmail({ email: event.target.value });
	};
	const handleChangeMobile = (event) => {
		setMobile({ mobile: event.target.value });
	};
	const handleChangeSubscription = (event) => {
		setSubscription({ subscription: event.target.value });
	};
	const handleChangeService = (event) => {
		setServiceRendered({ serviceRendered: event.target.value });
	};
	const handleChangeLocation = (event) => {
		setLocation({ location: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		data = {
			name: name,
			email: email,
			mobile: mobile,
			subscription: subscription,
			serviceRendered: serviceRendered,
			location: location,
		};

		axios
			.post(`https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub`, { data })
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
	};

	return (
		<>
			<Container fluid>
				<Row>
					<Col lg='3' sm='6'>
						<Card className='card-stats'>
							<Card.Body>
								<Row>
									<Col xs='5'>
										<div className='icon-big text-center icon-warning'>
											<i className='nc-icon nc-chart text-warning'></i>
										</div>
									</Col>
									<Col xs='7'>
										<div className='numbers'>
											<p className='card-category'>Number</p>
											<Card.Title as='h4'>150GB</Card.Title>
										</div>
									</Col>
								</Row>
							</Card.Body>
							<Card.Footer>
								<hr></hr>
								<div className='stats'>
									<i className='fas fa-redo mr-1'></i>
									Update Now
								</div>
							</Card.Footer>
						</Card>
					</Col>
					<Col lg='3' sm='6'>
						<Card className='card-stats'>
							<Card.Body>
								<Row>
									<Col xs='5'>
										<div className='icon-big text-center icon-warning'>
											<i className='nc-icon nc-light-3 text-success'></i>
										</div>
									</Col>
									<Col xs='7'>
										<div className='numbers'>
											<p className='card-category'>Revenue</p>
											<Card.Title as='h4'>$ 1,345</Card.Title>
										</div>
									</Col>
								</Row>
							</Card.Body>
							<Card.Footer>
								<hr></hr>
								<div className='stats'>
									<i className='far fa-calendar-alt mr-1'></i>
									Last day
								</div>
							</Card.Footer>
						</Card>
					</Col>
					<Col lg='3' sm='6'>
						<Card className='card-stats'>
							<Card.Body>
								<Row>
									<Col xs='5'>
										<div className='icon-big text-center icon-warning'>
											<i className='nc-icon nc-vector text-danger'></i>
										</div>
									</Col>
									<Col xs='7'>
										<div className='numbers'>
											<p className='card-category'>Errors</p>
											<Card.Title as='h4'>23</Card.Title>
										</div>
									</Col>
								</Row>
							</Card.Body>
							<Card.Footer>
								<hr></hr>
								<div className='stats'>
									<i className='far fa-clock-o mr-1'></i>
									In the last hour
								</div>
							</Card.Footer>
						</Card>
					</Col>
					<Col lg='3' sm='6'>
						<Card className='card-stats'>
							<Card.Body>
								<Row>
									<Col xs='5'>
										<div className='icon-big text-center icon-warning'>
											<i className='nc-icon nc-favourite-28 text-primary'></i>
										</div>
									</Col>
									<Col xs='7'>
										<div className='numbers'>
											<p className='card-category'>Followers</p>
											<Card.Title as='h4'>+45K</Card.Title>
										</div>
									</Col>
								</Row>
							</Card.Body>
							<Card.Footer>
								<hr></hr>
								<div className='stats'>
									<i className='fas fa-redo mr-1'></i>
									Update now
								</div>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col md='6'>
						<Card>
							<Card.Header>
								<Card.Title as='h4'>Email Statistics</Card.Title>
								<p className='card-category'>Last Campaign Performance</p>
							</Card.Header>
							<Card.Body>
								<div className='ct-chart ct-perfect-fourth' id='chartPreferences'>
									<ChartistGraph
										data={{
											labels: ['40%', '20%', '40%'],
											series: [40, 20, 40],
										}}
										type='Pie'
									/>
								</div>
								<div className='legend'>
									<i className='fas fa-circle text-info'></i>
									Subscribed <i className='fas fa-circle text-danger'></i>
									Pending <i className='fas fa-circle text-warning'></i>
									Unsubscribed
								</div>
								<hr></hr>
								<div className='stats'>
									<i className='far fa-clock'></i>
									Campaign sent 2 days ago
								</div>
							</Card.Body>
						</Card>
					</Col>

					<Col md='6'>
						<Card>
							<Card.Header>
								<Card.Title as='h4'>2017 Sales</Card.Title>
								<p className='card-category'>All products including Taxes</p>
							</Card.Header>
							<Card.Body>
								<div className='ct-chart' id='chartActivity'>
									<ChartistGraph
										data={{
											labels: [
												'Jan',
												'Feb',
												'Mar',
												'Apr',
												'Mai',
												'Jun',
												'Jul',
												'Aug',
												'Sep',
												'Oct',
												'Nov',
												'Dec',
											],
											series: [
												[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
												[412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
											],
										}}
										type='Bar'
										options={{
											seriesBarDistance: 10,
											axisX: {
												showGrid: false,
											},
											height: '245px',
										}}
										responsiveOptions={[
											[
												'screen and (max-width: 640px)',
												{
													seriesBarDistance: 5,
													axisX: {
														labelInterpolationFnc: function (value) {
															return value[0];
														},
													},
												},
											],
										]}
									/>
								</div>
							</Card.Body>
							<Card.Footer>
								<div className='legend'>
									<i className='fas fa-circle text-info'></i>
									Tesla Model S <i className='fas fa-circle text-danger'></i>
									BMW 5 Series
								</div>
								<hr></hr>
								<div className='stats'>
									<i className='fas fa-check'></i>
									Data information certified
								</div>
							</Card.Footer>
						</Card>
					</Col>
					<Col md='12'>
						<Card className='card-tasks'>
							<Card.Header>
								<Card.Title as='h4'>Form</Card.Title>
								<p className='card-category'>Customer Data</p>
							</Card.Header>
							<Card.Body>
								<Form>
									<Row>
										<Col className='pr-1' md='5'>
											<Form.Group>
												<label>Name</label>
												<Form.Control
													placeholder='Name'
													type='text'
													onChange={handleChangeName}
												></Form.Control>
											</Form.Group>
										</Col>
										<Col className='px-1' md='5'>
											<Form.Group>
												<label>Email</label>
												<Form.Control
													placeholder='username@email.com'
													type='text'
													onChange={handleChangeEmail}
												></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col className='pr-1' md='6'>
											<Form.Group>
												<label>Mobile number</label>
												<Form.Control
													placeholder='mobile number'
													type='text'
													onChange={handleChangeMobile}
												></Form.Control>
											</Form.Group>
										</Col>
										<Col className='pr-1' md='6'>
											<Form.Group>
												<label>Location</label>
												<Form.Control
													placeholder='mobile number'
													type='text'
													onChange={handleChangeLocation}
												></Form.Control>
											</Form.Group>
										</Col>
										<Col className='pl-1 text-center' md='6'>
											<Row>
												<Col sm='3'>
													<Form.Group>
														<label>Subscribed</label>
														<Form.Control
															name='subscription'
															type='radio'
															onChange={handleChangeSubscription}
														></Form.Control>
													</Form.Group>
												</Col>
												<Col sm='3'>
													<Form.Group>
														<label>Pending</label>
														<Form.Control
															name='subscription'
															type='radio'
															onChange={handleChangeSubscription}
														></Form.Control>
													</Form.Group>
												</Col>
												<Col sm='3'>
													<Form.Group>
														<label>Unsubscribed</label>
														<Form.Control
															name='subscription'
															type='radio'
															onChange={handleChangeSubscription}
														></Form.Control>
													</Form.Group>
												</Col>
											</Row>
										</Col>
									</Row>

									<Button
										className='btn-fill pull-right'
										type='submit'
										variant='info'
										onSubmit={handleSubmit}
									>
										Submit
									</Button>
									<div className='clearfix'></div>
								</Form>
							</Card.Body>
							<Card.Footer>
								<hr></hr>
								<div className='stats'>
									<i className='now-ui-icons loader_refresh spin'></i>
									Updated 3 minutes ago
								</div>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Dashboard;
