DROP DATABASE IF EXISTS booking_requests;

CREATE DATABASE booking_requests;

USE booking_requests;

CREATE TABLE bookings (
  booking_id text,
  homeId int,
  userId int,
  checkIn text,
  checkOut text,
  pricePerNight int,
  noGuests int,
  PRIMARY KEY (homeId, booking_id)
);


COPY bookings (booking_id, checkin, checkout, homeid, noguests, pricepernight, userid) FROM '/Users/machd/Desktop/calendar/database/data.csv' WITH