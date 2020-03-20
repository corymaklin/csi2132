import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
    const { id } = this.props;

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
                {
                    !id && 
                    <NavItem right>
                        <NavLink>
                            <Link to="/signup">
                                Sign up
                            </Link> 
                        </NavLink>
                    </NavItem>
                }
                {
                    !id &&
                    <NavItem>
                        <NavLink>
                            <Link to="/login">
                                Login
                            </Link>
                        </NavLink>
                    </NavItem>
                }
                {
                    id &&
                    <NavItem right>
                        <NavLink>
                            <Link to="/property">
                                Add
                            </Link>
                        </NavLink>
                    </NavItem>
                }
            </Nav>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
    return {
        id: state.id
    };
}

export default connect(mapStateToProps)(Navbar);
