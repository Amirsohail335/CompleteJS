'use strict';

const bookings = [];

const createBooking = function (flightNum, passengerNum, price) {
  const booking = {
    flightNum,
    passengerNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('AIR231', 100, 2900);

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  //Get answer
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}(Write option number)`
      )
    );
    console.log(answer);
  },
};

poll.registerNewAnswer();
