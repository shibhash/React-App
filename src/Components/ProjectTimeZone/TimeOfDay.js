import React, { Component } from 'react';

class TimeOfDay extends Component {
    constructor() {
        super()
        this.state = {
            time: {}
        }
    }

    componentDidMount() {
        fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=9X2HUCGPR4LS&format=json&by=zone&zone=Europe/Oslo')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    time: data
                })
            })
    }

    render() {
        return (
            <div className = 'time'>
                <p>
                    Time: {this.state.time.formatted} 
                </p>
            </div>
              
        );
    }
}



export default TimeOfDay;
