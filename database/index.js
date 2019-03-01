const mysql = require('mysql');
const mysqlConfig = require('./sql-config.js');

const connection = mysql.createConnection(mysqlConfig);

const getBookingsById = (homeId, callback) => {
  const queryStr = 'SELECT * FROM `bookings` WHERE bookings.home_id = ?';
  connection.query(queryStr, [homeId], (err, bookings) => {
    if (err) {
      callback(err);
    } else {
      callback(null, bookings);
    }
  });
};

const getPricingById = (homeId, callback) => {
  const queryStr = 'SELECT * FROM `prices` WHERE bookings.home_id = ?';
  connection.query(queryStr, [homeId], (err, pricing) => {
    if (err) {
      callback(err);
    } else {
      callback(null, pricing);
    }
  });
};

const createBooking = (booking, callback) => {
  const queryStr = 'INSERT INTO `bookings` (home_id, user_id, check_in, check_out, price_per_night, no_guests) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(queryStr, booking, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

const changeBooking = (bookingId, callback) => {
  const changedQuery = `UPDATE bookings SET user_id = ${booking.userId}, check_in = ${booking.checkIn}, check_out = ${booking.checkOut}, price_per_night = ${booking.price}, no_guests = ${booking.guest}  WHERE booking_id = ${booking.bookingId}` 
  connection.query(changedQuery, (err, booking) => {
    if (err) {
      callback(err, null)
      return;
    } else {
      callback(null, booking)
    }
  })
}

const deleteBooking = (bookingId, callback) => {
  const deleteQuery = `DELETE FROM booking where booking_id = ${bookingId.home}`
  connection.query(deleteQuery, (err, booking) => {
    if (err){
      callback(err, null)
      return;
    }
    callback(null, booking)
  })
}

module.exports = {
  getBookingsById,
  getPricingById,
  createBooking,
  changeBooking,
  deleteBooking
};
