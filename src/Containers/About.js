import React from 'react';
import { Row, Col } from 'reactstrap';

import Logo from '../img/about/flyer-opening.png';
import M1 from '../img/about/flyer-mission1.jpg';
import M2 from '../img/about/flyer-mission2.jpg';

const About = () => (
  <Row>
    <Col xs="12">
      <div style={{ padding: 20, width: '100%' }}>
        <img src={Logo} alt="Soup Mobile" style={{ width: '100%' }} />
      </div>
      <p>
        The
        &nbsp;
        <strong style={{ color: 'red' }}>
          SoupMobile
        </strong>
        &nbsp;
        is a &#39;mobile&#39; soup kitchen that was founded in 2003 on
        a wing and a lot of prayers. We are a faith based 501(c)(3) non-profit
        charity serving the homeless in Dallas, Texas. Our Missions Statement is
        three simple words spoken by Jesus more than 2,000 years ago:
        &nbsp;
        <strong style={{ color: 'purple' }}>
          &#34;FEED MY SHEEP.&#34;
        </strong>
      </p>

      <h2 className="mission-header">
        Mission #1: Feeding The Homeless
      </h2>

      <div style={{ width: '100%', textAlign: 'center' }}>
        <img src={M1} alt="Plate with bowl of soup and sandwich" style={{ maxHeight: 100 }} />
      </div>

      <p>
        The
        &nbsp;
        <strong style={{ color: 'red' }}>
          SoupMobile
        </strong>
        &nbsp;
        was founded in 2003 by David Timothy, a.k.a. SoupMan, on a wing and a
        lot of prayers. The SoupMobile is different from traditional soup
        kitchens in that we are
        &nbsp;
        <strong style={{ color: 'purple' }}>
          &#39;mobile&#39;
        </strong>
        &nbsp;
        and take the food to areas where the
        homeless congregate. We are literally on the front lines in the war
        against hunger in
        &nbsp;
        <strong style={{ color: 'blue' }}>
          Dallas, Texas.
        </strong>
      </p>

      <p>
        More important than the actual food we serve is the reason we do it.
        2,000 years ago Jesus said
        &nbsp;
        <strong style={{ color: 'purple' }}>
          &#34;FEED MY SHEEP.&#34;
        </strong>
        &nbsp;
        We believe he meant more than just food. He also meant love, caring,
        and compassion. Yes, the food feeds their bodies, but the love of Jesus
        feeds their souls.
      </p>

      <p>
        The
        &nbsp;
        <strong style={{ color: 'red' }}>
          SoupMobile
        </strong>
        &nbsp;
        provides and incredible
        &nbsp;
        <strong style={{ color: 'purple' }}>
          250,000
        </strong>
        &nbsp;
        meals per year. Each of our meals is served with one special magic
        ingredient ---
        &nbsp;
        <strong style={{ color: 'purple' }}>
          LOVE!!!
        </strong>
      </p>

      <h2 className="mission-header">
        Mission #2: Sheltering the Homeless
      </h2>

      <div style={{ width: '100%', textAlign: 'center' }}>
        <img src={M2} alt="House" style={{ maxHeight: 100 }} />
      </div>

      <p>
        The
        &nbsp;
        <strong style={{ color: 'red' }}>
          SoupMobile Shelter
        </strong>
        &nbsp;
        program is specifically designed to help address the homeless problem in
        Dallas, Texas. In the Dallas area alone there are estimated to be up to
        &nbsp;
        <strong style={{ color: 'darkblue' }}>
          10,000
        </strong>
        &nbsp;
        homeless individuals. Even more tragic is that one of four homless is a
        Veteran. With only
        &nbsp;
        <strong style={{ color: 'darkblue' }}>
          10,000
        </strong>
        &nbsp;
        homeless individuals. Even more tragic is that one of the four homeless
        is a Veteran. With only
        &nbsp;
        <strong style={{ color: 'darkred' }}>
          2,500
        </strong>
        &nbsp;
        shelter beds available on any given night, simple math tells us there is
        not enough &#39;Room at the Inn.&#39;
      </p>

      <p style={{ textAlign: 'center' }}>
        As such the
        &nbsp;
        <strong style={{ color: 'red' }}>
          SoupMobile Shelter
        </strong>
        &nbsp;
        program is
        &nbsp;
        <strong>
          <u>
            NOT
          </u>
        </strong>
        &nbsp;
        a one size fits all program. In fact our shelter program has many facets
        including:
      </p>

      <ul>
        <li>
          <p>
            <strong style={{ color: 'red' }}>
              SoupMobile Shelter
            </strong>
            &nbsp;
            for women fleeing domestic violence.
          </p>
        </li>
        <li>
          <p>
            <strong style={{ color: 'red' }}>
              Multiple apartment/lodging
            </strong>
            &nbsp;
            units throughout the Dallas area.
          </p>
        </li>
        <li>
          <p>
            <strong style={{ color: 'red' }}>
              Motel Housing
            </strong>
            &nbsp;
            assistance program that provides short term emergency housing.
          </p>
        </li>
        <li>
          <p>
            <strong style={{ color: 'red' }}>
              Sponsored Housing
            </strong>
            &nbsp;
            program in conjunction with the downtown Dallas Omni Hotel,
            Matthews Southwest & NBC 5 which provides housing for women &
            children who do not have a place to call home.
            <a taget="_blank" href="https://www.youtube.com/watch?v=Y2viaye34Ec">
              Click here
            </a>
            to view video coverage of this partnership.
          </p>
        </li>
      </ul>

    </Col>
  </Row>
);

export default About;
