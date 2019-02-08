import React, { Component } from 'react';


class TimeOfDay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: '',
            timeLink: ''
        }
    }
       
    componentWillMount() {
        const db = 'http://api.timezonedb.com/v2.1/get-time-zone?key=9X2HUCGPR4LS&format=json&by=zone&zone='
        this.setState({timeLink: db + this.props.location})
    }

    componentDidMount() {
        fetch(this.state.timeLink)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    time: data
                })
            })
    }

    render() {

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        let d = new Date(this.state.time.formatted);
        let h = d.getHours();
        let m = addZero(d.getMinutes());
        let timeOfDay

        if (h < 12) {
            timeOfDay = "Morning"
        } else if (h >= 12 && h < 17) {
            timeOfDay = "Afternoon"
        } else {
            timeOfDay = "Night"
        }
        
        return (
            <div>
                < div className = '' >
                    {this.state.time.formatted != null ? (
                        <p>{timeOfDay} {h}:{m} </p>
                        )
                        :
                        (
                            <p>loading ... </p>
                        )
                    }
                </div>
            </div>   
        );
    }
}



export default TimeOfDay;
