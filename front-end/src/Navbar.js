import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import _ from 'lodash';

class Navbar extends Component {

  constructor (props) {
    super(props);

    this.state = {
        dropdownOpen: false
    };
  }
  
  toggle = () => {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
  }

  handleOnClick = () => {
      this.props.history.push('/full-time-employees');
  }

  render() {

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
                            Sign up
                        </Link> 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/login">
                            Login
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem right>
                    <NavLink>
                        <Link to="/property">
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
