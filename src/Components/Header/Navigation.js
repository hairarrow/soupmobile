import React from 'react';
import PropTypes from 'prop-types';

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
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar isOpen={aboutIsOpen}>
                <DropdownToggle nav caret tag={NavLink} href="/about.html" onMouseEnter={this.toggleAbout} onClick={this.toggleAbout}>
                  About Us
                </DropdownToggle>
                <DropdownMenu onMouseLeave={this.toggleAbout}>
                  <DropdownItem>
                    <NavLink href="/about/our-story">
                      Our Story
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/about/FAQs">
                      FAQs
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/about/financials">
                      Financials
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/about/contact-us">
                      Contact Us / Directions
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/our-partners">
                  Our Partners
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar isOpen={newsIsOpen}>
                <DropdownToggle nav caret onMouseEnter={this.toggleNews} onClick={this.toggleNews}>
                  In The News
                </DropdownToggle>
                <DropdownMenu onMouseLeave={this.toggleNews}>
                  <DropdownItem>
                    <NavLink href="/in-the-news/tv">
                      TV
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/in-the-news/print">
                      Print
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/in-the-news/radio">
                      Radio
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/about/contact-us">
                      Contact Us / Directions
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/our-missions">
                  Our Missions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/store">
                  Store
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Button href="/donate" color="warning" style={{ marginRight: 10, marginLeft: 'auto' }}>
            Donate
          </Button>
          <Button href="/volunteer" color="danger">
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
