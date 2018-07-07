import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import Socials from '../Socials';

import {
  BLUE,
  DARK_BLUE,
} from '../../config';

import Logo from './logo-readable.png';
import Bg from '../../img/bg2.png';
import Tear from '../../img/teartop.png';
import Navigation from './Navigation';

const Header = () => (
  <div
    style={{
      marginBottom: 30,
      backgroundColor: `${BLUE}`,
      backgroundImage: `url(${Bg})`,
      borderTop: `14px solid ${DARK_BLUE}`,
    }}
  >
    <div
      style={{
        background: `url(${Tear}) repeat-x bottom transparent`,
      }}
    >
      <Container>
        <Row>
          <Col
            xs="12"
            sm="12"
            md="12"
            lg="8"
            xl="8"
          >
            <div
              style={{
                width: '100%',
                padding: '20px 0',
              }}
            >
              <img
                src={Logo}
                alt="Soup Mobile"
                style={{
                  maxWidth: '100%',
                }}
              />
            </div>
          </Col>
          <Col
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Socials />
            <a
              href="https://www.123formbuilder.com/form-3593169/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to get the latest SoupMobile updates
            </a>
          </Col>
        </Row>
        <Row>
          <Navigation
            containerStyle={{
              width: '100%',
              position: 'relative',
              top: 10,
            }}
            navStyle={{ background: `${DARK_BLUE}` }}
          />
        </Row>
      </Container>
    </div>
  </div>
);

export default Header;
