import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  ButtonGroup,
  Button,
} from 'reactstrap';

import David from '../../img/featured/David.jpg';
import Bibles from '../../img/featured/bibles4homless.jpg';
import Pennies from '../../img/featured/pennies-homepage.png';
import Amazon from '../../img/featured/SoupMobileAmazonSmile.jpg';
import Mission from '../../img/featured/mission-1-video-preview.jpg';

const FEATURED_LINKS = [
  {
    link: '/about-us/soupmans-chair',
    title: 'Meet the SoupMan and his wife Shana',
    img: David,
    description: `His name is David Timothy, but on the streets of Dallas they
      call him the SoupMan! David is the founder and Executive Director of the
      SoupMobile. David was never homeless himself but he grew up in a home
      where food was scarce...`,
    buttons: [
      {
        title: 'Read More',
        link: '/about-us/meet-the-soupman',
      },
      {
        title: 'Jesus Tests the Soupman',
        link: 'https://www.youtube.com/watch?v=IkccMlC3h9E',
      },
      {
        title: 'SoupMan\'s Chair',
        link: '/about-us/soupmans-chair',
      },
    ],
  },
  {
    link: 'https://www.youtube.com/embed/MxiDAGG2bIw?rel=0&autoplay=1',
    title: 'Meet the SoupMobile',
    img: Mission,
    description: `Ever wonder how a small charity like the SoupMobile can have
      #4 power packed missions? We are like the children's book titled: 'The
      Little Engine That Could.' And with the help of an army of supporters,
      volunteers & prayer warriors we are making a real difference in the lives
      of the ones Jesus calls the 'least of these.' Watch this short video for
      all the inside details!`,
  },
  {
    link: '/pages/pennies-from-heaven',
    title: 'Pennies from Heaven',
    img: Pennies,
    description: `The SoupMobile is making a real difference in the lives of
      the ones Jesus calls the ‘least of these.’ As such we provide more than
      250,000 meals per year to the homeless in the Dallas area. We also house
      the homeless in our shelter program....`,
    buttons: [
      {
        title: 'Read More',
        link: '/pages/pennies-from-heaven',
      },
    ],
  },
  {
    link: '/amazon-smile',
    title: 'Amazon Smile',
    img: Amazon,
    description: `Do you shop at Amazon.com? If so, have I got great news for you.
      If you go to Amazon.com and choose SoupMobile as your chatiry of choice...`,
    buttons: [
      {
        title: 'Read More',
        link: '/amazon-smile',
      },
    ],
  },
  {
    link: '/pages/bibles',
    title: 'Bibles For The Homeless',
    img: Bibles,
    description: `We are on a mission to give every single homeless person in
      Dallas a free Bible. With an estimated 10,000 homeless in Dallas that
      means we need 10,000 Bible's. Impossible some might say but I've got a book
      that says with GOD 'All things are possible.`,
    buttons: [
      {
        title: 'Read More',
        link: '/pages/bibles',
      },
    ],
  },
];

const FLink = ({
  link,
  title,
  img,
  description,
  buttons,
}) => (
  <Card>
    <CardBody>
      <CardTitle style={{ textAlign: 'center' }}>
        <Link to={link}>
          {title}
        </Link>
      </CardTitle>
    </CardBody>
    <div
      style={{
        width: '100%',
        height: 150,
        textAlign: 'center',
      }}
    >
      <CardImg
        src={img}
        alt={title}
        style={{
          maxHeight: '100%',
          width: 'auto',
          margin: 'auto',
        }}
      />
    </div>
    <CardBody>
      <CardText>
        {description}
      </CardText>
      {(buttons.length >= 1)
        ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {buttons.map(l => (
              <Button
                tag={Link}
                to={l.link}
                key={l.title}
                style={{ display: 'inline', marginRight: 10, marginBottom: 10 }}
              >
                {l.title}
              </Button>
            ))}
          </div>
        ) : ''
      }
    </CardBody>
  </Card>
);

FLink.defaultProps = { buttons: [] };

FLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};


const FeaturedLinks = () => (
  <Container>
    <Row>
      <h3 className="display-4" style={{ padding: '20px 0' }}>
        Featured Links
      </h3>
    </Row>
    {
      FEATURED_LINKS.reduce((a, b) => {
        const groups = [...a];
        if (groups.length === 0) {
          const newGroup = [a];
          groups.push(newGroup);
        }
        if (groups[groups.length - 1].length < 3) {
          groups[groups.length - 1].push(b);
        } else {
          const newGroup = [b];
          groups.push(newGroup);
        }
        return groups;
      }).map(row => (
        <Row key={Math.random().toString()}>
          {row.map(link => (
            <Col key={link.title} md="4" style={{ marginBottom: 40 }}>
              <FLink {...link} />
            </Col>
          ))}
        </Row>
      ))
    }
  </Container>
);

export default FeaturedLinks;
