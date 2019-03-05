const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const db = require('../database/index.js');
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


app.post('/api/bookings', (req, res) => {
  const booking = req.body.booking;
  db.postingNewDate(booking, (err) => {
    if (err) {
      res.status(400).end()
    } else {
      res.status(200).send('success');
    }
  });
});


app.put('/api/bookings', (req, res) => {
  db.changeBooking(booking, (err) => {
    if (err){
      res.status(400).end()
    }
    res.status(303).send();
  })
})


app.delete('/api/bookings', (req, res) => {
  db.deleteBooking(houseId, (err) =>{
    if (err){
      res.status(400).end()
    }
    res.status()
  })
  res.status(200).send();
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
