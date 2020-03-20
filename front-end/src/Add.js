import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Add extends Component {
    constructor (props) {
        super(props);

        this.state = {
            price: '',
            bedrooms: '',
            bathrooms: '',
            roomType: 'private room',
            propertyType: 'apartment',
            accommodations: '',
            streetName: '',
            streetNumber: '',
            city: '',
            province: '',
            country: '',
            zipCode: ''
        }
    }

     handleSubmit = async event => {
        const { history } = this.props;
        const { id } = this.props;

        event.preventDefault();

        await fetch('http://localhost:8090/properties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hostId: id, ...this.state })
        });

        history.push({
            pathname: '/'
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render () {
        const { id } = this.props;

        if (!id) {
            return <Redirect to='/login' />
        }

        return (
            <div className="form-group">
                <form onSubmit={ this.handleSubmit }>
                    <div className='input-label'>
                        <label>Price/Day</label>
                        <input
                            className="form-control"
                            name='price'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Bedrooms</label>
                        <input
                            className="form-control" 
                            name='bedrooms'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Bathrooms</label>
                        <input
                            className="form-control" 
                            name='bathrooms'
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Room Type</label>
                        <select
                            className="form-control" 
                            name='roomType'
                            onChange={ this.handleChange }
                        >
                            <option>private room</option>
                            <option>shared room</option>
                            <option>property</option>
                        </select>
                    </div>
                    <div className='input-label'>
                        <label>Property Type</label>
                        <select
                            className="form-control" 
                            name='propertyType'
                            onChange={ this.handleChange }
                        >
                            <option>apartment</option>
                            <option>home</option>
                            <option>cottage</option>
                            <option>bed & breakfast</option>
                            <option>hostel</option>
                        </select>
                    </div>
                    <div className='input-label'>
                        <label>Accommodations</label>
                        <input
                            name='accommodations'
                            className="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Amenities</label>
                        <input
                            name='amenities'
                            className="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <h3>Address</h3>
                    <div className='input-label'>
                        <label>Street Name</label>
                        <input
                            name='streetName'
                            className="form-control" 
                            type='text'
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className='input-label'>
                        <label>Street Number</label>
                        <input
                            name='streetNumber'
                            className="form-control" 
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
                    <button
                        type="submit"
                        className="btn btn-primary submit-button"
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

// export default Form;

function mapStateToProps(state) {
    return {
        id: state.id
    };
}

export default connect(mapStateToProps)(Add);