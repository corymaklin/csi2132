import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setId } from './actionCreators';

class Form extends Component {
    constructor (props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            dateOfBirth: '',
            streetName: '',
            streetNumber: '',
            city: '',
            province: '',
            country: '',
            zipCode: '',
            username: '',
            password: ''
        }
    }

     handleSubmit = async event => {
        const { history, dispatch } = this.props;

        event.preventDefault();

        const response = await fetch('http://localhost:8090/persons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });

        const json = await response.json()

        await fetch('http://localhost:8090/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ personId: json.id, ...this.state })
        });

        dispatch(setId(json.id));

        history.push({
            pathname: '/'
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render () {
        return (
            <div className="form-group">
                <form onSubmit={ this.handleSubmit }>
                    <h3>Personal Information</h3>
                    <div className='input-label'>
                        <label>First Name</label>
                        <input
                            className="form-control"
                            name='firstName'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Last Name</label>
                        <input
                            className="form-control" 
                            name='lastName'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Email</label>
                        <input
                            className="form-control" 
                            name='email'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Phone Number</label>
                        <input
                            className="form-control" 
                            name='phoneNumber'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Date of Birth</label>
                        <input
                            className="form-control" 
                            name='dateOfBirth'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <h3>Address</h3>
                    <div className='input-label'>
                        <label>Street Name</label>
                        <input
                            className="form-control" 
                            type='text'
                            name='streetName'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Street Number</label>
                        <input
                            className="form-control" 
                            name='streetNumber'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>City</label>
                        <input
                            name='city'
                            className="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>State/Province</label>
                        <input
                            name='province'
                            className="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Country</label>
                        <input
                            name='country'
                            className="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>ZIP/Postal Code</label>
                        <input
                            name='zipCode'
                            className="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <h3>Account</h3>
                    <div className='input-label'>
                        <label>Username</label>
                        <input
                            name='username'
                            className="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Password</label>
                        <input
                            name='password'
                            className="form-control" 
                            type='password'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary submit-button"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        id: state.id
    };
}

export default connect(mapStateToProps)(Form);

// export default Form;