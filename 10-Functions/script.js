'use strict';

const booking = [{}]

const createBooking = function (flightNum, passengerNum, price) {
  const booking = {
    flightNum,
    passengerNum,
    price,
  };
  console.log(booking);
  booking.push(booking);
};
