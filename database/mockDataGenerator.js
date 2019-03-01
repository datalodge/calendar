const moment = require('moment');
const fs = require('fs')
const ws = fs.createWriteStream('data.csv')


let randomDays = function(){
  return Math.floor(Math.random() * 10) + 1;
}

let randomUser = function(){
  return Math.round(Math.random()*500000 + 1)
}

let randomBookingGenerator = function(){
  return Math.floor(Math.random() * 5)
}

let string = '';
ws.write('homeId,userId,checkIn,checkOut,price,guest \n');
for (let i = 1; i < 1000001; i++) {
  let randomBooking = randomBookingGenerator()
  let check_in = moment().clone().add(randomDays(), 'days');
  let check_out = null;
  let price_per_night = Math.round(Math.random()*500 + 50);
  for (let j = 0; j < randomBooking; j++){ 
    check_out = check_in.clone().add(randomDays(), 'days');
    let formatCheckIn = check_in.format('YYYY/MM/DD');
    let formatCheckOut = check_out.format('YYYY/MM/DD');
    let userId = randomUser();
    let no_guests = Math.round(Math.random()*4 + 1);     
    string += (`${i}, ${userId}, ${formatCheckIn}, ${formatCheckOut}, ${price_per_night}, ${no_guests} \n`);
    check_in = check_out.clone().add(randomDays(), 'days')
  }
  if (i % 100000 === 0){
    ws.write(string)
    string = '';
  }

  if (i % 1000000 === 0){
    console.log(i)
  }
}
