import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
  BLUE,
  DARK_BLUE
} from '../config';

import Img from '../img/van-logo.png';
import Bg from '../img/bg2.png';
import Tear from '../img/tearbottom.png';

const Footer = () => (
  <div
    style={{
      backgroundColor: BLUE,
      backgroundImage: `url(${Bg})`,
    }}
  >
    <Container style={{ padding: '40px 0' }}>
      <Row>
        <Col>
          <img src={Img} alt="SoupMobile" />
        </Col>
        <Col>
          <Row style={{ padding: 20 }}>
            <Col style={{ color: '#fff' }}>
              SoupMobile, Inc.
              <br />
              2423 S. Good Latimer
              <br />
              Dallas, TX 75215
              <br />
              214-655-6396
              <br />
              david@soupmobile.org
            </Col>
            <Col>
              <span style={{
                background: 'lightblue',
                padding: '5px',
              }}>
                a 501(c)(3) charity organization
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
