import React, { Component } from 'react';

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

        console.log(properties)

        return (
            <div>

            </div>
        );
    }
}

export default Properties;