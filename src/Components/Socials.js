import React from 'react';
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
  <div style={{ textAlign: 'center' }}>
    {Links.map(l => (
      <a href={l.link} key={l.icon} style={{ color: '#fff' }}>
        <FontAwesomeIcon icon={['fab', l.icon]} style={{ fontSize: 38, marginRight: 10 }} />
      </a>
    ))}
  </div>
);

export default Socials;
