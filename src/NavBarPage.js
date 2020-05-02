import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBLink
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

class NavbarPage extends Component {
  constructor(props){
    super(props);

  this.state = {
    isOpen: false
  }
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className="ma3" color="black" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Whiteline</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
             <MDBLink> <Link to="main"
             spy={true}
             smooth={true}
             offset={-70}
             duration= {500}
             >Home</Link></MDBLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBLink><Link to="about-us"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              >About</Link></MDBLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBLink><Link to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}>Contact</Link></MDBLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Categories</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Stationery</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Gifts Set</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Customized Corporate Items</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input onChange={this.props.handleInput} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;