import React, { Component } from 'react';

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
            zipCode: ''
        }
    }

     handleSubmit = async (event) => {
        const { history } = this.props;

        event.preventDefault();

        const response = await fetch('http://localhost:8090/persons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });

        const json = await response.json()

        // history.push({
        //     pathname: '/'
        // });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render () {
        return (
            <div class="form-group">
                <form onSubmit={ this.handleSubmit }>
                    <div class='input-label'>
                        <label>First Name</label>
                        <input
                            class="form-control"
                            name='firstName'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Last Name</label>
                        <input
                            class="form-control" 
                            name='lastName'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Email</label>
                        <input
                            class="form-control" 
                            name='email'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Phone Number</label>
                        <input
                            class="form-control" 
                            name='phoneNumber'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Date of Birth</label>
                        <input
                            class="form-control" 
                            name='dateOfBirth'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <h3>Address</h3>
                    <div class='input-label'>
                        <label>Street Name</label>
                        <input
                            class="form-control" 
                            type='text'
                            name='streetName'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Street Number</label>
                        <input
                            class="form-control" 
                            name='streetNumber'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>City</label>
                        <input
                            name='city'
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>State/Province</label>
                        <input
                            name='province'
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Country</label>
                        <input
                            name='country'
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>ZIP/Postal Code</label>
                        <input
                            name='zipCode'
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary submit-button"
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;