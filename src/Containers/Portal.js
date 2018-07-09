import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import SideNavigation from '../Components/SideNavigation';
import About from './About';

const Portal = () => (
  <Container>
    <Row>
      <Col sm="12" lg="3">
        <SideNavigation />
      </Col>
      <Col sm="12" lg="9">
        <Switch>
          <Route path="/about" component={About} />
        </Switch>
      </Col>
    </Row>
  </Container>
);

export default Portal;
