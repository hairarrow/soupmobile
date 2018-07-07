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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleNews = this.toggleNews.bind(this);
    this.state = {
      isOpen: false,
      aboutIsOpen: false,
      newsIsOpen: false,
    };
  }

  toggleNews() {
    this.setState(prev => ({
      newsIsOpen: !prev.newsIsOpen,
    }));
  }

  toggleAbout() {
    this.setState(prev => ({
      aboutIsOpen: !prev.aboutIsOpen,
    }));
  }

  toggleNav() {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
    }));
  }

  render() {
    const {
      isOpen,
      aboutIsOpen,
      newsIsOpen,
    } = this.state;

    const {
      containerStyle,
      navStyle,
    } = this.props;

    return (
      <div style={containerStyle}>
        <Navbar dark expand="md" style={navStyle}>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar pills>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar isOpen={aboutIsOpen}>
                <DropdownToggle nav caret tag={Link} to="/about" onMouseEnter={this.toggleAbout}>
                  About Us
                </DropdownToggle>
                <DropdownMenu onMouseLeave={this.toggleAbout}>
                  <DropdownItem>
                    <Link to="/about/our-story">
                      Our Story
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/about/FAQs">
                      FAQs
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/about/financials">
                      Financials
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/about/contact-us">
                      Contact Us / Directions
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} to="/our-partners">
                  Our Partners
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar isOpen={newsIsOpen}>
                <DropdownToggle nav caret tag={Link} to="/in-the-news" onMouseEnter={this.toggleNews}>
                  In The News
                </DropdownToggle>
                <DropdownMenu onMouseLeave={this.toggleNews}>
                  <DropdownItem>
                    <Link to="/in-the-news/tv">
                      TV
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/in-the-news/print">
                      Print
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/in-the-news/radio">
                      Radio
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/about/contact-us">
                      Contact Us / Directions
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} to="/our-missions">
                  Our Missions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/store">
                  Store
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Button tag={Link} to="/donate" color="warning">
            Donate
          </Button>
          <Button tag={Link} to="/volunteer" color="danger">
            Volunteer
          </Button>
        </Navbar>
      </div>
    );
  }
}

Navigation.defaultProps = {
  containerStyle: {},
  navStyle: {},
};

Navigation.propTypes = {
  containerStyle: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
  navStyle: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
};

export default Navigation;
