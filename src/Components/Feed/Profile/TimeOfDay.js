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
        //add a zero so that you get well formatted time
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        //Cheking the location time
        let d = new Date(this.state.time.formatted);
        let h = d.getHours();
        let m = addZero(d.getMinutes());
        let timeOfDay

        //Check time of the day
        if (h < 12) {
            timeOfDay = "Morning"
        } else if (h >= 12 && h < 17) {
            timeOfDay = "Afternoon"
        } else {
            timeOfDay = "Night"
        }
        
        //Cheking my local time
        let myTime = new Date();
        let myHours = myTime.getHours();
        let myMins = addZero(myTime.getMinutes());
        let timeTravel = myHours-h >= 0 ? 'in past' : 'in future'

        return (
            <div>
                    {this.state.time.formatted != null ? (
                        <p>{timeOfDay}  {h}:{m} <br /> <span className = 'time-travel'>{timeTravel}</span></p>
                        )
                        :
                        (
                            <p>loading ... </p>
                        )
                    }
                    
            </div>   
        );
    }
}



export default TimeOfDay;
