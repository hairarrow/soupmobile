import React from 'react';

import Header from '../Components/Header';
import About from '../Components/Home/About';
import Dreamteam from '../Components/Home/Dreamteam';
import Missions from '../Components/Home/Missions';
import FeaturedLinks from '../Components/Home/FeaturedLinks';

const Home = () => (
  <div>
    <Header />
    <About />
    <Dreamteam />
    <Missions />
    <FeaturedLinks />
  </div>
);

export default Home;
