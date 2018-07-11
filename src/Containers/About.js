import React from 'react';
import { Row, Col } from 'reactstrap';

import Logo from '../img/about/flyer-opening.png';
import M1 from '../img/about/flyer-mission1.jpg';
import M2 from '../img/about/flyer-mission2.jpg';
import M3 from '../img/about/flyer-mission3.gif';
import M4 from '../img/about/flyer-mission4.jpg';

const About = () => (
  <Row>
    <Col xs="12" className="pb-5">
      <div className="p-5 w-100">
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

      <div className="w-100 text-center mb-5">
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

      <div className="w-100 text-center mb-5">
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
            &nbsp;
            <a taget="_blank" href="https://www.youtube.com/watch?v=Y2viaye34Ec">
              Click here
            </a>
            &nbsp;
            to view video coverage of this partnership.
          </p>
        </li>
      </ul>

      <h2 className="mission-header">
        Mission #3: Christmas for the Homeless
      </h2>

      <div className="w-100 text-center mb-5">
        <img src={M3} alt="Plate with bowl of soup and sandwich" style={{ maxHeight: 100 }} />
      </div>

      <p><span style={{fontSize: 20}}>2,000 years ago there was <strong><span style={{color: '#ee82ee'}}>‘No Room at the Inn’</span></strong> for baby Jesus. Starting in 2005 and every year since, the <strong><span style={{color: '#ff0000'}}>SoupMobile</span></strong>, in an event called <span style={{color: '#800080'}}><strong><em>Celebrate Jesus</em></strong></span>, makes ‘room at the inn’ for 500 homeless men, women, and children at the spectacular downtown Dallas <strong><span style={{color: '#0000cd'}}>Omni Hotel</span></strong>.</span></p>
        <p><span style={{fontSize: 20}}>We give them a truly magical Christmas. They all receive new clothes, fabulous gifts, and we throw a <span style={{color: '#800080'}}><strong>huge banquet</strong></span> for them and in their honor. Most important is that when they wake up on Christmas morning, it’s in a <strong><span style={{color: '#ff0000'}}>warm, safe bed at the Omni</span></strong> – <span style={{color: '#800080'}}><strong>not</strong></span> <strong><span style={{color: '#ff0000'}}>in a cardboard box under a bridge somewhere.</span></strong></span></p>
        <p><span style={{fontSize: 20}}>If you come and volunteer with us at <span style={{color: '#ff0000'}}><strong><em>Celebrate Jesus</em></strong></span>, when you see the <strong>tears</strong> in their eyes and the <strong>smiles</strong> on those homeless faces, your heart will be touched in a way it has never been before.</span></p>


      <h2 className="mission-header">
        Mission #4: Christ for the Homless
      </h2>

      <div className="w-100 text-center mb-5">
        <img src={M4} alt="Plate with bowl of soup and sandwich" style={{ maxHeight: 100 }} />
      </div>

      <p><span style={{fontSize: 20}}><span style={{color: '#ff0000'}}><em><strong>SoupMobile Church&nbsp;</strong></em></span>is a 'one of a kind' church on the entire planet! It's because at&nbsp;<span style={{color: '#ff0000'}}><em><strong>SoupMobile Church&nbsp;</strong></em></span>the homeless are the&nbsp;<span style={{color: '#800080'}}><em><strong>‘Members’&nbsp;</strong></em></span>&amp; if you &amp; I attend we are their&nbsp;<span style={{color: '#800080'}}><em><strong>‘Guests.’ &nbsp;</strong></em></span>A revolutionary concept to be sure but one that we think is long overdue.</span></p>
        <p><span style={{fontSize: 20}}><span style={{color: '#ff0000'}}><em><strong>SoupMobile Church&nbsp;</strong></em></span>is the 'home' church for the homeless in Dallas. The homeless have NEVER had their own 'home' church---<strong><span style={{color: '#0000cd'}}>UNTIL NOW!</span></strong></span></p>
        <p><span style={{color: '#800080'}}><span style={{fontSize: 26}}><em><strong>SoupMobile Church&nbsp;</strong></em>is non-denominational but 100% Jesus based.</span></span></p>
        <p><span style={{fontSize: 20}}>Every Sunday at 11:00 AM <a href="https://www.google.com/maps/place/2423+S+Good+Latimer+Expy+W,+Dallas,+TX+75215"><em>SoupMobile Church 2423 S. Good Latimer, Dallas, Texas 75215</em></a> is filled to capacity with our homeless members. In addition to giving the call to Christ each week, the Church also offers a wide variety of services like&nbsp;<span style={{color: '#800080'}}><strong>job placement, counseling, housing guidance and food and clothing assistance</strong>.</span></span></p>
        <p><span style={{fontSize: 20}}>As you can well imagine we will not be able to pass the collection plate at&nbsp;<span style={{color: '#ff0000'}}><strong><em>SoupMobile Church.</em></strong></span>&nbsp;Our homeless members simply do not have any funds. Will you please give prayerful consideration to helping.</span></p>
        <p><span style={{fontSize: 20}}><span style={{fontSize: 18}}><strong>More details at: www.soupmobile.org</strong></span></span></p>
        <hr style={{borderColor: 'black'}} />
        <p align="center"><span style={{color: '#ff0000'}}><span style={{fontSize: 25}}><span style={{fontFamily: 'Comic Sans MS'}}><strong>Meet The SoupMan</strong></span></span></span></p>
        <p align="center"><strong><img alt src="http://c1940652.r52.cf0.rackcdn.com/56db75ebb8d39a3ca3001013/flyer-soupman.jpg" /></strong></p>
        <p><span style={{fontSize: 22}}>His name is <span style={{color: '#800080'}}>David Timothy</span>, but on the streets of Dallas they call him the <span style={{color: '#ff0000'}}><strong>SoupMan</strong>!</span>&nbsp; <span style={{color: '#0000ff'}}>David is the founder and Executive Director</span> of the <strong><span style={{color: '#ff0000'}}>SoupMobile.</span></strong>&nbsp; He was born in Detroit, Michigan and graduated from Western Michigan University in 1970.&nbsp; For many years David had a fulfilling career in the field of insurance where he specialized in pension organization.</span></p>
        <p><span style={{fontSize: 22}}>David was never homeless himself, but he grew up in a home where food was scarce and he experienced hunger first hand. This has given him a tremendous compassion for the homeless and their daily struggles to find food to eat. So on a wing and a prayer(s) he started the <strong><span style={{color: '#ff0000'}}>SoupMobile</span></strong> in <strong><span style={{color: '#800080'}}>2003</span></strong>.</span></p>
        <p><span style={{fontSize: 22}}>The SoupMan considers himself to be blessed beyond measure because the Lord lets him serve the homeless in Dallas. <strong><span style={{color: '#ff0000'}}>David says he leads by following Christ!</span></strong></span></p>
        <p><span style={{fontSize: 22}}>The SoupMan's favorite soup is <span style={{color: '#ff0000'}}>Tomato Soup</span>!</span></p>
        <hr style={{borderColor: 'black'}} />
        <p align="center"><img alt src="http://c1940652.r52.cf0.rackcdn.com/56db7802b8d39a3ca3001015/flyer-closing.png" /></p>
        <p align="center"><span style={{color: 'red', fontSize: 25}}><strong>Feeding and Sheltering the Homeless</strong></span></p>
        <p align="center"><span style={{fontFamily: 'Segoe Script', color: 'blue', fontSize: '125%'}}><strong>Only A Life Lived For Others Is A Life Worthwhile!</strong></span></p>
        <p align="center"><span style={{fontSize: 25}}><span style={{color: 'red'}}><strong>SoupMobile Inc</strong></span></span></p>
        <p align="center"><span style={{fontSize: 22}}>2423 S. Good Latimer<br />
            Dallas, TX 75215<br />
            214-655-6396<br />
            <a href="http://www.soupmobile.org">www.soupmobile.org</a></span></p>
        <p align="center"><span style={{fontSize: 22}}>On Facebook:<br />
            <a href="http://www.facebook.com/soupmobile">www.facebook.com/soupmobile</a></span></p>
        <p align="center"><span style={{fontSize: 22}}>On Twitter:<br />
            <a href="http://www.twitter.com/soupmobile">www.twitter.com/soupmobile</a></span></p>
        <p align="center"><span style={{fontSize: 22}}>On YouTube:<br />
            <a href="http://www.youtube.com/user/soupmobile">www.youtube.com/user/soupmobile</a></span></p>
        <p align="center"><span style={{fontSize: 22}}>Executive Director<br />
            David Timothy<br />
            <a href="mailto:david@soupmobile.org">david@soupmobile.org</a></span></p>
    </Col>
  </Row>
);

export default About;
