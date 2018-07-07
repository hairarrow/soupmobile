import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { BLUE } from '../../config';
import Bg from '../../img/bg2.png';
import TearTop from '../../img/teartop.png';
import TearBottom from '../../img/tearbottom.png';

const About = () => (
  <Container
    style={{
      marginBottom: 20,
      background: `url(${Bg}) ${BLUE}`,
    }}
  >
    <Row noGutters>
      <Col>
        <div
          style={{
            background: `url(${TearBottom}) repeat-x top transparent`,
            width: '100%',
            height: 6,
          }}
        />
        <p
          style={{
            color: '#fff',
            fontSize: 18,
            padding: 15,
          }}
        >
          {`The SoupMobile is a 'mobile' soupkitchen that was founded in 2003 on a wing
          and a lot of prayers. We are a faith based 501 ©(3) non-profit charity that
          ‘Feeds & Shelters’ the homeless in Dallas, Texas. Our Mission Statement is
          three simple words spoken by Jesus more than 2,000 years ago: “FEED MY SHEEP.”`}
        </p>
        <div
          style={{
            background: `url(${TearTop}) repeat-x top transparent`,
            width: '100%',
            height: 6,
          }}
        />
      </Col>
    </Row>
  </Container>
);

export default About;
