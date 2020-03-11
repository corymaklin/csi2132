import React, { Component } from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

class Property extends Component {
    render () {
        const { propertyAttributes } = this.props;

        console.log(propertyAttributes)

    const amenities = _.map(propertyAttributes.amenities, amenity => <li key={ uuidv4() }>{ amenity }</li>);

        return (
            <div>
                <p>Bedrooms: { propertyAttributes.bedrooms }</p>
                <p>Bathrooms: { propertyAttributes.bathrooms }</p>
                <h4>Amenities</h4>
                <ul>
                    { amenities }
                </ul>
                <p>Address: { propertyAttributes.property_address }</p>
            </div>
        );
    }
}

export default Property;