import React, { Component } from 'react';

class Form extends component {
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

    async handleSubmit (event) {
        const {
            price,
            bedrooms,
            bathrooms,
            roomType,
            propertyType,
            streetName,
            streetNumber,
            city,
            province,
            country,
            zipCode
        } = this.state;

        event.preventDefault();

        const property = {
            price,
            bedrooms,
            bathrooms
        }

        fetch('');

        // event.target.reset();
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render () {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>Price/Day</label>
                    <input
                        name='price'
                        type='text'
                        onChange={ this.handleChange }
                    />
                    <label>Bedrooms</label>
                    <input
                        name='bedrooms'
                        type='text'
                        onChange={ this.handleChange }
                    />
                    <label>Bathrooms</label>
                    <input
                        name='bathrooms'
                        type='text'
                        onChange={ this.handleChange }
                    />
                    <label>Room Type</label>
                    <select
                        name='roomType'
                    >
                        <option>Private Room</option>
                        <option>Shared Room</option>
                        <option>Property</option>
                    </select>
                    <label>Property Type</label>
                    <select
                        name='propertyType'
                    >
                        <option>Apartment</option>
                        <option>Home</option>
                        <option>Cottage</option>
                        <option>Bed & Breakfast</option>
                        <option>Hostel</option>
                    </select>
                    <label>Street Name</label>
                    <input
                        type='text'
                        onChange={ this.handleChange }
                    />
                    <label>Street Number</label>
                    <input
                        type='text'
                        onChange={ this.handleChange }
                    />
                    <label>City</label>
                    <input
                        type='text'
                        onChange={ this.handleChange }
                    />
                    <label>State/Province</label>
                    <input
                        type='text'
                        onChange={ this.handleChange }
                    />
                    <label>Country</label>
                    <input
                        type='text'
                        onChange={ this.handleChange }
                    />
                    <label>ZIP/Postal Code</label>
                    <input
                        type='text'
                        onChange={ this.handleChange }
                    />
                    <label>Accommodations</label>
                    <input
                        type='text'
                        onChange={ this.handleChange }
                    />
                </form>
            </div>
        );
    }
}

export default Form;