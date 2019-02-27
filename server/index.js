const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const db = require('../database');
const { cal } = require('./calendarHelper');

const app = express();
const PORT = 3002;

app.use('/', expressStaticGzip(path.join(__dirname, '/../public'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/bookings/:homeId', (req, res) => {
  db.getBookingsById(req.params.homeId, (err, bookings) => {
    if (err) {
      console.log('err from db');
    } else {
      cal(bookings, (error, grid) => {
        if (error) {
          console.log('no calendar');
        } else {
          res.json(grid);
        }
      });
    }
  });
});

app.get('/api/pricing/:homeId', (req, res) => {
  db.getPricingById(req.params.homeId, (err, pricing) => {
    if (err) {
      // send error
    } else {
      res.json(pricing);
    }
  });
});

app.post('/api/bookings', (req, res) => {
  const booking = req.body.booking;
  console.log(booking);
  db.createBooking(booking, (err) => {
    if (err) {
      // send error
    } else {
      res.send('success');
    }
  });
});



app.get('/api/bookings/info', (req, res) => {
  console.log('get req sent')
  res.status(200).send()
})

app.post('/api/bookings/info', (req, res) => {
  console.log('get req sent')
  res.status(200).send()
})


app.put('/api/bookings', (req, res) => {
  //Give a to and from date needs to change the booking 
  console.log('put req worked')
  res.status(303).send();
})


app.delete('/api/bookings', (req, res) => {
  console.log('delete req worked');
  res.status(200).send();
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
