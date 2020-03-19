import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import _ from 'lodash';

class Navbar extends Component {

  constructor (props) {
    super(props);

    this.state = {
        dropdownOpen: false
    };
  }

  render () {

    console.log(this.props)

    return (
      <nav className="navbar navbar-expand-sm mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
              RentWise
          </Link>
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
            <Nav navbar>
                <NavItem right>
                    <NavLink>
                        <Link to="/signup">
                        {/* <Link to={ { pathname: '/signup', search: this.props.location.search } }> */}
                            Sign up
                        </Link> 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/login">
                        {/* <Link to={ { pathname: '/login', search: this.props.location.search } }> */}
                            Login
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem right>
                    <NavLink>
                        <Link to="/property">
                        {/* <Link to={ { pathname: '/property', search: this.props.location.search } }> */}
                            Add
                        </Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
      </nav>
    );
  }
}

export default Navbar;
