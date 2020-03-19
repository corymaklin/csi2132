import React, { Component } from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

class Property extends Component {
    render () {
        const { propertyAttributes } = this.props;

        const amenities = _.map(propertyAttributes.amenities, amenity => <li key={ uuidv4() }>{ amenity }</li>);

        // const image = btoa(String.fromCharCode.apply(null, propertyAttributes.property_image.data));

        // this.setState({pic: "data:image/png;base64," + image});

        // var image = window.URL.createObjectURL(new Blob([ propertyAttributes.property_image.data ]));

        // let base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

        // var base64 = btoa(
        // new Uint8Array(propertyAttributes.property_image.data)
        //     .reduce((data, byte) => data + String.fromCharCode(byte), '')
        // );

        return (
            <div>
                <p>Bedrooms: { propertyAttributes.bedrooms }</p>
                <p>Bathrooms: { propertyAttributes.bathrooms }</p>
                <h4>Amenities</h4>
                <ul>
                    { amenities }
                </ul>
                <p>Address: { propertyAttributes.property_address }</p>
                {/* <img src={ `data:image/jpeg;base64,${ propertyAttributes.property_image.data.toString('base64') }` } /> */}
                {/* <img src={ `data:image/jpeg;base64,${ propertyAttributes.property_image.data }` } /> */}

                {/* <img src={ `data:image/png;base64,${ propertyAttributes.property_image.data }` } /> */}
                {/* <img src={ `data:image/png;base64,${ propertyAttributes.property_image.data.toString('base64') }` } /> */}
                {/* <img src={ `png;base64,${ propertyAttributes.property_image.data.toString('base64') }` } /> */}
                {/* <img src={ `data:image/jpeg;base64,${ propertyAttributes.property_image.data.toString('base64') }` } /> */}
                {/* <img src={ `jpeg;base64,${ propertyAttributes.property_image.data.toString('base64') }` } /> */}
                {/* <img src={ 'data:image/png;base64,' + base64 } /> */}
                {/* <img src={ 'data:image/png;base64,' + image } /> */}
                {/* <img src={ 'data:image/jpeg;base64,' + image } /> */}
                {/* <img src={ image } /> */}
            </div>
        );
    }
}

export default Property;