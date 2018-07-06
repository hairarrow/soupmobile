import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = [
  {
    icon: 'facebook-square',
    link: '/',
  },
  {
    icon: 'twitter-square',
    link: '/',
  },
  {
    icon: 'youtube-square',
    link: '/',
  },
  {
    icon: 'instagram',
    link: '/',
  },
];

const Socials = () => (
  <div>
    {Links.map(l => (
      <a href={l.link}>
        <FontAwesomeIcon icon={['fab', l.icon]} />
      </a>
    ))}
  </div>
);

export default Socials;
