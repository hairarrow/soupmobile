import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import SideNavigation from '../Components/SideNavigation';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Portal = ({ children }) => (
  <div>
    <Header />
    <Container>
      <Row>
        <Col sm="12" lg="3">
          <SideNavigation />
        </Col>
        <Col sm="12" lg="9">
          {children}
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

Portal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Portal;
