import React from 'react';
import ReactDOM from 'react-dom';
import BookingWidget from './BookingWidget.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: null,
      bookingFound : false,
      bookingInfo: []
    };
    this.postBooking = this.postBooking.bind(this);
  }

  componentDidMount() {
      let homeId;
      if (window.location.href.split('?')[1]) {
        homeId = window.location.href.split('?')[1];
       } else {
        window.location = window.location.href + "?100";
       }
      let endpoint = '/api/bookings/'
    fetch(endpoint + homeId)
      .then(response =>  response.json())
      .then(JSONresp => JSONresp)
      .then((calendar) => {
        // console.log(calendar, 'this is the calendar')
        this.setState({
          calendar: calendar,
        });
      })
      .catch(error => console.error(error));

      fetch('/api/bookingInfo/' + homeId)
      .then(response =>  response.json())
      .then((dataInfo) => {
        this.setState({
          bookingInfo : dataInfo,
          bookingFound: true
        })
      })
      .catch(error => console.error(error));
  }

  postBooking(booking) {
    console.log(`${booking} was sent`);
    fetch('/api/bookings/', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({booking: booking}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // console.log(response, 'this is the response')
        return response.json();
      })
  }

  render() {
    const { calendar } = this.state;
    if (!calendar) {
      return (
        <div>
          { /* Failed to load data, please try again */ }
        </div>
      );
    }
    return (
      <div>
        {this.state.bookingFound ? 
        <div>
          <BookingWidget
            calendar={calendar}
            postBooking={this.postBooking}
            userData = {this.state.bookingInfo}
          />
        </div>
        : null
        }
      </div>
    );
  }
}
