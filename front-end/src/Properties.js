import React, { Component } from 'react';
import _ from 'lodash';
// import Property from './Property';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

class Properties extends Component {
    constructor (props) {
        super(props);

        this.state = {
            properties: []
        };
    }

    async componentDidMount () {
        try {

            const response = await fetch('http://localhost:8090/properties');
    
            const json = await response.json();            

            this.setState({
                properties: json
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    render () {
        const { properties } = this.state;

        const propertyElements = _.map(properties, propertyAttributes => {
            return (
                <div key={ uuidv4() }>
                    <Link to={ `/properties/${propertyAttributes.id}` }>
                        <img src='/a1.png' className="img-thumbnail"/>
                    </Link> 
                    <p>Address: { `${propertyAttributes.province}, ${propertyAttributes.country}` }</p>
                    <p>{ `${propertyAttributes.price} CAD/night` }</p>
                </div>
                // <Property
                //     key={ uuidv4() }
                //     propertyAttributes={ propertyAttributes }
                // />
            );
        });

        return (
            <div className='content'>
                { propertyElements }
            </div>
        );
    }
}

export default Properties;