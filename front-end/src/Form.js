import React, { Component } from 'react';

class Form extends Component {
    constructor (props) {
        super(props);

        this.state = {
            price: '',
            bedrooms: '',
            bathrooms: '',
            roomType: '',
            propertyType: '',
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

        await fetch('http://localhost:8090/properties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });

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
            <div class="form-group">
                <form onSubmit={ this.handleSubmit }>
                    <div class='input-label'>
                        <label>Price/Day</label>
                        <input
                            class="form-control"
                            name='price'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Bedrooms</label>
                        <input
                            class="form-control" 
                            name='bedrooms'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Bathrooms</label>
                        <input
                            class="form-control" 
                            name='bathrooms'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Room Type</label>
                        <select
                            class="form-control" 
                            name='roomType'
                        >
                            <option>Private Room</option>
                            <option>Shared Room</option>
                            <option>Property</option>
                        </select>
                    </div>
                    <div class='input-label'>
                        <label>Property Type</label>
                        <select
                            class="form-control" 
                            name='propertyType'
                        >
                            <option>Apartment</option>
                            <option>Home</option>
                            <option>Cottage</option>
                            <option>Bed & Breakfast</option>
                            <option>Hostel</option>
                        </select>
                    </div>
                    <div class='input-label'>
                        <label>Street Name</label>
                        <input
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Street Number</label>
                        <input
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>City</label>
                        <input
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>State/Province</label>
                        <input
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Country</label>
                        <input
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>ZIP/Postal Code</label>
                        <input
                            class="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div class='input-label'>
                        <label>Accommodations</label>
                        <input
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