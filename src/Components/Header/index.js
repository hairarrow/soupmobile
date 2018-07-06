import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import Socials from '../Socials';

import Logo from './logo-readable.png';


const Header = () => (
  <Container>
    <Row>
      <Col
        xs="12"
        sm="12"
        md="12"
        lg="8"
        xl="8"
      >
        <img src={Logo} alt="Soup Mobile" />
      </Col>
      <Col>
        <Socials />
        <a href="/">Subscribe to get the latest SoupMobile updates</a>
      </Col>
    </Row>
  </Container>
);

export default Header;
