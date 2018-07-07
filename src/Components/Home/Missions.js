import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import MISSIONONE from '../../img/mission-1[1].jpg';
import MISSIONTWO from '../../img/mission-2[1].jpg';
import MISSIONTHREE from '../../img/mission-3[1].jpg';
import MISSIONFOUR from '../../img/mission-4-6.jpg';

const Mission = ({ title, link, img }) => (
  <Col style={{ marginBottom: 40 }}>
    <Link
      to={link}
      style={{
        width: 350,
        display: 'block',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <img
        src={img}
        alt={title}
        style={{ maxWidth: '100%', width: '100%' }}
      />
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 127, 255, 0.8)',
          color: '#fff',
          fontWeight: 600,
          textAlign: 'center',
          padding: '10px 0',
        }}
      >
        {title}
      </span>
    </Link>
  </Col>
);

Mission.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const Missions = () => (
  <Container style={{ marginTop: 40 }}>
    <Row style={{ marginBottom: 40 }}>
      <Col>
        <h2
          className="display-4"
          style={{ color: 'blue', textAlign: 'center' }}
        >
          OUR #4 MISSIONS
        </h2>
      </Col>
    </Row>

    <Row>
      <Mission
        title="Mission #1: Feeding the Homeless"
        link="/our-missions/mission-one"
        img={MISSIONONE}
      />
      <Mission
        title="Mission #2: Sheltering the Homeless"
        link="/our-missions/mission-two"
        img={MISSIONTWO}
      />
    </Row>
    <Row>
      <Mission
        title="Mission #3: Christmas for the Homeless"
        link="/our-missions/mission-three"
        img={MISSIONTHREE}
      />
      <Mission
        title="Mission #4: Christ for the Homeless"
        link="/our-missions/mission-four"
        img={MISSIONFOUR}
      />
    </Row>

  </Container>
);

export default Missions;
