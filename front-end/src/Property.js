import React, { Component } from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import * as moment from 'moment';

class Property extends Component {
    constructor (props) {
        super(props);

        this.state = {
            bookings: [],
            startDate: null,
            endDate: null
        };
    }

    async componentDidMount () {
        const { match } = this.props;

        try {

            const propertyResponse = await fetch(`http://localhost:8090/properties/${match.params.id}`);
    
            const propertyJson = await propertyResponse.json();  

            const bookingsResponse = await fetch(`http://localhost:8090/bookings/${match.params.id}`);

            const bookingsJson = await bookingsResponse.json();

            this.setState({
                ..._.head(propertyJson),
                bookings: bookingsJson
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    render () {
        const {
            street_number,
            street_name,
            city,
            province,
            country,
            zip_code,
            price,
            r_type,
            p_type,
            bedrooms,
            bathrooms,
            accommodations,
            amenities,
            bookings
        } = this.state;

        const amenitiesList = _.map(amenities, amenity => <li key={ uuidv4() }>{ amenity }</li>);

        const isDayBlocked = momentDate => {
            return _.some(bookings, booking => momentDate.isBetween(booking.date_from, booking.date_to, 'day', '[]'));
        }

        return (
            <div className='content'>
                <img src='/a1.png' className="img-thumbnail"/>
                <p>Address: { `${street_number} ${street_name} Street, ${city}, ${province}, ${country} ${zip_code} ` }</p>
                <p>{ `${price} CAD/night` }</p>
                <p>{ p_type }</p>
                <p>{ r_type }</p>
                <p>Bedrooms: { bedrooms }</p>
                <p>Bathrooms: { bathrooms }</p>
                <p>Accommodations: { accommodations }</p>
                <h5>Amenities</h5>
                <ul>
                    { amenitiesList }
                </ul>
                <DateRangePicker
                    startDate={ this.state.startDate } // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={ this.state.endDate } // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={ ({ startDate, endDate }) => this.setState({ startDate, endDate }) } // PropTypes.func.isRequired,
                    focusedInput={ this.state.focusedInput } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={ focusedInput => this.setState({ focusedInput }) } // PropTypes.func.isRequired,
                    isDayBlocked={ isDayBlocked }
                    numberOfMonths={2}
                    minDate={moment().subtract(2, 'months').startOf('month')}
                    maxDate={moment().add(2, 'months').endOf('month')}
                />
                <button className='submit-button'>Book</button>
            </div>
        );
    }
}

export default Property;