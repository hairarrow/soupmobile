import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Banner from '../../img/DreamyTeamBanner.jpg';

const Dreamteam = () => (
  <Container>
    <Row>
      <Col tag={Link} to="/pages/dreamteam">
        <img
          src={Banner}
          alt="SoupMobile Dream Team"
          style={{
            maxWidth: '100%',
          }}
        />
      </Col>
    </Row>
  </Container>
);

export default Dreamteam;
