// const moment = require('moment');
// const fs = require('fs')
// const ws = fs.createWriteStream('datastored.csv')
// // const {Writable} = require('stream')

// // const practice = new stream({
// //   transform(chunk, )
// // })


// let randomDays = function(){
//   return Math.floor(Math.random() * 10) + 1;
// }

// let randomUser = function(){
//   return Math.round(Math.random()*500000 + 1)
// }

// let randomBookingGenerator = function(){
//   return Math.floor(Math.random() * 5)
// }

// let homeId = {}

// ws.write('homeId,userId,checkIn,checkOut,price,guest \n');
// for (let i = 1; i < 100; i++) {
//   let randomBooking = randomBookingGenerator()
//   let check_in = moment().clone().add(randomDays(), 'days');
//   let check_out = null;
//   var individualHouse = []
//   let price_per_night = Math.round(Math.random()*500 + 50);
//   for (let j = 0; j < randomBooking; j++){ 
//     check_out = check_in.clone().add(randomDays(), 'days');
//     let formatCheckIn = check_in.format('YYYY/MM/DD');
//     let formatCheckOut = check_out.format('YYYY/MM/DD');
//     let userId = randomUser();
//     let no_guests = Math.round(Math.random()*4 + 1);    
//     let homeId = ({
//       homeId : i,
//       userId : userId,
//       checkIn : formatCheckIn,
//       checkOut : formatCheckOut,
//       price : price_per_night,
//       guests : no_guests
//     })    
//     // ws.write(`${i}, ${userId}, ${formatCheckIn}, ${formatCheckOut}, ${price_per_night}, ${no_guests} \n`);
//     ws.write('""' + JSON.stringify(homeId) + '""\n' )
//     // check_in = check_out.clone().add(randomDays(), 'days')
//   }
//   // homeId[i] = individualHouse
//   if (i === 50000){
//     console.log(i)
//   }
//   if (i === 100000){
//     console.log(i)
//   }
//   if (i === 5000000){
//     console.log(i)
//   }
//   if (i === 750000){
//     console.log(i)
//   }
//   if (i === 1000000){
//     console.log(i)
//   }
//   if (i === 2000000){
//     console.log(i)
//   }
//   if (i === 3000000){
//     console.log(i)
//   }
//   if (i === 4000000){
//     console.log(i)
//   }
//   if (i === 5000000){
//     console.log(i)
//   }
//   if (i === 6000000){
//     console.log(i)
//   }
//   if (i === 7000000){
//     console.log(i)
//   }
//   if (i === 8000000){
//     console.log(i)
//   }
//   if (i === 9000000){
//     console.log(i)
//   }
//   if (i === 9500000){
//     console.log(i)
//   }  
// }

//     // individualHouse.push({
//     //   homeId : i,
//     //   userId : userId,
//     //   checkIn : formatCheckIn,
//     //   checkOut : formatCheckOut,
//     //   price : price_per_night,
//     //   guests : no_guests
//     // })

// // // console.log(homeId)
// // console.log(homeId)

// // console.log(bookings)

//   // fs.writeFile('./data.json', JSON.stringify(homeId), (err) => {
//   //   if (err){
//   //     console.log(err);
//   //     return;
//   //   }
//   //   console.log('this worked')
//   // })


// // console.log(result)
//   // let user1 = randomUser()
//   // let user2 = randomUser()
//   // let user3 = randomUser()
//   // let user4 = randomUser()
//   // let check_in = moment().clone().add(randomDays(), 'days');
//   // let check_out = check_in.clone().add(randomDays(), 'days');
//   // let check_in2 = check_out.clone().add(randomDays(), 'days');
//   // let check_out2 = check_in2.clone().add(randomDays(), 'days');
//   // let check_in3 = check_out2.clone().add(randomDays(), 'days');
//   // let check_out3 = check_in3.clone().add(randomDays(), 'days');
//   // let check_in4 = check_out3.clone().add(randomDays(), 'days');
//   // let check_out4 = check_in4.clone().add(randomDays(), 'days');
//   // let price_per_night = Math.round(Math.random()*500 + 50);
//   // let no_guests = Math.round(Math.random()*4 + 1);
//   // check_in = check_in.format('YYYY/MM/DD');
//   // check_in2 = check_in2.format('YYYY/MM/DD');
//   // check_in3 = check_in3.format('YYYY/MM/DD');
//   // check_in4 = check_in4.format('YYYY/MM/DD');
//   // check_out = check_out.format('YYYY/MM/DD');
//   // check_out2 = check_out2.format('YYYY/MM/DD');
//   // check_out3 = check_out3.format('YYYY/MM/DD');
//   // check_out4 = check_out4.format('YYYY/MM/DD');
//   // array.push({
//   //   home : {
//   //     homeId : i,
//   //     user : {
//   //       userId : user1,
//   //       checkIn: check_in,
//   //       checkOut : check_out,
//   //       price : price_per_night,
//   //       guests: no_guests,
//   //     } 
//   //   }
//   // })
//   // console.log(array)
//   // console.log(JSON.stringify(array))
// // console.log(array)

//   // fs.writeFile('./data.json', JSON.stringify(array) , (err) => {
//   //   console.log(array)
//   //   if (err){
//   //     console.log(err);
//   //     return;
//   //   }
//   //   console.log('this worked')
//   // })

//   // console.log(user_id)
//   // console.log(
//   //   `INSERT INTO bookings (home_id, user_id, check_in, check_out, price_per_night, no_guests) VALUES (${i}, ${user}, '${check_in}', '${check_out}', ${price_per_night}, ${no_guests});`
//   // );
//   // console.log(
//   //   `INSERT INTO bookings (home_id, user_id, check_in, check_out, price_per_night, no_guests) VALUES (${i}, ${user2}, '${check_in2}', '${check_out2}', ${price_per_night}, ${no_guests});`
//   // );
//   // console.log(
//   //   `INSERT INTO bookings (home_id, user_id, check_in, check_out, price_per_night, no_guests) VALUES (${i}, ${user3}, '${check_in3}', '${check_out3}', ${price_per_night}, ${no_guests});`
//   // );
//   // console.log(
//   //   `INSERT INTO bookings (home_id, user_id, check_in, check_out, price_per_night, no_guests) VALUES (${i}, ${user4}, '${check_in4}', '${check_out4}', ${price_per_night}, ${no_guests});`
//   // );

