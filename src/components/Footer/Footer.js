import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<footer className='footer px-0 px-lg-3'>
				<Container fluid>
					<nav>
						<ul className='footer-menu'>
							<li>
								<a href='https://dev-ab.herokuapp.com/' onClick={(e) => e.preventDefault()}>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href='https://github.com/abraham-alizor/admin'
									onClick={(e) => e.preventDefault()}
								>
									github
								</a>
							</li>
						</ul>
						<p className='copyright text-center'>
							© {new Date().getFullYear()}{' '}
							<a href='https://dev-ab.herokuapp.com/'>Abraham Alizor</a>, 2022
						</p>
					</nav>
				</Container>
			</footer>
		);
	}
}

export default Footer;
