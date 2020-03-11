import React, { Component } from 'react';
import _ from 'lodash';
import Property from './Property';
import { v4 as uuidv4 } from 'uuid';

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
                <Property
                    key={ uuidv4() }
                    propertyAttributes={ propertyAttributes }
                />
            );
        });

        return (
            <div>
                { propertyElements }
            </div>
        );
    }
}

export default Properties;