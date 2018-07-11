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
                <NavLink href="/index.html" className="text-white">
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar isOpen={aboutIsOpen}>
                <DropdownToggle nav caret tag={NavLink} href="/about.html" onMouseEnter={this.toggleAbout} onClick={this.toggleAbout} className="text-white">
                  About Us
                </DropdownToggle>
                <DropdownMenu onMouseLeave={this.toggleAbout}>
                  <DropdownItem>
                    <NavLink href="/about.html" className="text-primary">
                      Our Story
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/about/faq.html" className="text-primary">
                      FAQs
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/about/financials.html" className="text-primary">
                      Financials
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/about/contact-us.html" className="text-primary">
                      Contact Us / Directions
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/our-partners.html" className="text-white">
                  Our Partners
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar isOpen={newsIsOpen}>
                <DropdownToggle tag={NavLink} href="/about/in-the-news.html" nav caret onMouseEnter={this.toggleNews} onClick={this.toggleNews} className="text-white">
                  In The News
                </DropdownToggle>
                <DropdownMenu onMouseLeave={this.toggleNews}>
                  <DropdownItem>
                    <NavLink href="/in-the-news/tv.html" className="text-primary">
                      TV
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/in-the-news/print.html" className="text-primary">
                      Print
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/in-the-news/radio.html" className="text-primary">
                      Radio
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/about/contact-us.html" className="text-primary">
                      Contact Us / Directions
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/missions.html" className="text-white">
                  Our Missions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/store.html" className="text-white">
                  Store
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Button href="/donate.html" color="warning" style={{ marginRight: 10, marginLeft: 'auto' }}>
            Donate
          </Button>
          <Button href="/volunteer.html" color="danger">
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
