import React from 'react';
import PropTypes from 'prop-types';
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
    <NavLink href={path} className={(big) ? 'active' : ''}>
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
      <Navbar color="faded" light className="d-none d-md-block">
        <NavbarToggler className="d-lg-none" onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills vertical>
            <NLink big path="/about.html" title="About Us" />
            <NLink path="/about/faq.html" title="SoupMobile FAQs" />
            <NLink path="/about/in-the-news.html" title="In The News" />
            <NLink path="/about/financials.html" title="Financials" />
            <NLink path="/about/contact-us.html" title="Contact Us / Directions" />
            <NLink big path="/volunteer.html" title="Volunteer" />
            <NLink big path="/our-missions.html" title="Our Missions" />
            <NLink path="/our-missions/mission-one.html" title="Mission #1" />
            <NLink path="/our-missions/mission-two.html" title="Mission #2" />
            <NLink path="/our-missions/mission-three.html" title="Mission #3" />
            <NLink path="/our-missions/mission-four.thml" title="Mission #4" />
            <NLink big path="/our-partners.html" title="Our Partners" />
            <NLink big path="/donate-your-car.html" title="Donate Your Car" />
            <NLink big path="/amazon-smile.html" title="Amazon Smile" />
            <NLink big path="/store.html" title="Store" />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default SideNavigation;
