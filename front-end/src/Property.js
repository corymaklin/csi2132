import React, { Component } from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class Property extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    async componentDidMount () {
        const { match } = this.props;

        try {

            const response = await fetch(`http://localhost:8090/properties/${match.params.id}`);
    
            const json = await response.json();            

            this.setState({
                ..._.head(json)
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
            amenities
        } = this.state;

        const amenitiesList = _.map(amenities, amenity => <li key={ uuidv4() }>{ amenity }</li>);

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
                {/* <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                /> */}
                <button className='submit-button' >Book</button>
            </div>
        );
    }
}

export default Property;