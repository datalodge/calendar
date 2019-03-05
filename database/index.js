const cassandra = require('cassandra-driver');
const uuidv1 = require('uuid/v1');


const client = new cassandra.Client({
    contactPoints : ['127.0.0.1'],
    localDataCenter : 'datacenter1'
})

let getBookingsById = (homeId, callback) => {
  let bookingDates = `SELECT * FROM booking_request.bookings WHERE homeId = ${homeId}`
  client.execute(bookingDates, (err, dates) =>{
    if (err){
      console.log(err);
      callback(err, null)
      return;
    }
    callback(null, dates)
  })
}

let postingNewDate = (userInfo) => {
  let newBookingInformation = `INSERT INTO booking_request.bookings (booking_id, homeId, userId, checkIn, checkOut, pricePerNight, noGuests) VALUES (${uuidv1()}, ${userInfo.bookingId}, ${userInfo.homeId},
                               ${userInfo.checkIn}, ${userInfo.checkOut}, ${userInfo.pricePerNight}, ${userInfo.noGuests})`
  client.execute(newBookingInformation, (err, data) => {
    if (err){
      console.log(err);
      return
    }
    console.log('Successfully saved to bookings', data);
  })
}


module.exports = {
    getBookingsById,
    postingNewDate
}