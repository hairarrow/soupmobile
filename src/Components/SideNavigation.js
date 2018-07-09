import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NLink = ({ path, title, big }) => (
  <NavItem style={{ marginBottom: 10 }}>
    <NavLink tag={Link} to={path} className={(big) ? 'active' : ''}>
      {title}
    </NavLink>
  </NavItem>
);

NLink.defaultProps = { big: false };

NLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  big: PropTypes.bool,
};


class SideNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: true };
  }

  toggle() {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="faded" light>
        <NavbarToggler className="d-lg-none" onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills vertical>
            <NLink big path="/about" title="About Us" />
            <NLink path="/about/FAQs" title="SoupMobile FAQs" />
            <NLink path="/in-the-news" title="In The News" />
            <NLink path="/about/financials" title="Financials" />
            <NLink path="/about/contact-us" title="Contact Us / Directions" />
            <NLink big path="/volunteer" title="Volunteer" />
            <NLink big path="/our-missions" title="Our Missions" />
            <NLink path="/our-missions/mission-one" title="Mission #1" />
            <NLink path="/our-missions/mission-two" title="Mission #2" />
            <NLink path="/our-missions/mission-three" title="Mission #3" />
            <NLink path="/our-missions/mission-four" title="Mission #4" />
            <NLink big path="/our-partners" title="Our Partners" />
            <NLink big path="/donate-your-car" title="Donate Your Car" />
            <NLink big path="/amazon-smile" title="Amazon Smile" />
            <NLink big path="/store" title="Store" />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default SideNavigation;
