const cassandra = require('cassandra-driver');
const uuidv1 = require('uuid/v1');


//all Contact points  contactPoints : ['172.31.17.162:9042', '172.31.20.14:9042'],


const client = new cassandra.Client({
  contactPoints : ['172.31.25.51:9042'],
  localDataCenter : 'us-west-2'
})

let getBookingsById = (homeId, callback) => {
  let bookingDates = `SELECT * FROM booking_request.bookings WHERE homeId = ${homeId}`
  client.execute(bookingDates, (err, dates) =>{
    // console.log(dates, 'here are booking dates')
    if (err){
      console.log(err);
      callback(err, null)
      return;
    }
    callback(null, dates)
  })
}

// homeId : 10000013
// userId : 100
// checkIn : 2019/03/10
// checkOut : 2019/03/14
// pricePerNight : 400
// noGuests : 5   



let postingNewDate = (userInfo) => {
  // console.log(userInfo, 'this is userinfo')
  // let newBookingInformation = `INSERT INTO booking_request.bookings (booking_id, homeid, userid, checkin, checkout, pricepernight, noguests) values ('${uuidv1()}', ${userInfo.homeId}, ${userInfo.userId}, '${userInfo.checkIn}', '${userInfo.checkOut}', ${userInfo.pricePerNight}, ${userInfo.noGuests})`
  let newBookingInformation = `INSERT INTO booking_request.bookings (booking_id, homeid, userid, checkin, checkout, pricepernight, noguests) values ('${uuidv1()}',10000014 , 100, '2019/03/10', '2019/03/14', 400, 4)`
  client.execute(newBookingInformation, (err, data) => {
    if (err){
      console.log(err, 'this is an error');
      return
    }
    // console.log('Successfully saved to bookings', data);
  })
}


module.exports = {
    getBookingsById,
    postingNewDate
}
