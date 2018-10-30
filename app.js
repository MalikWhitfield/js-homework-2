//Solve the following problems using Conditionals

//1. Write a function that takes 2 parameters and displays the larger
function largerNum(num1, num2) {
  if (num1 < num2) {
    return num2
  } else {
    return num1
  }
}


console.log('hello')
//2. Write a function that will take in a number (1-100) return the letter grade for the student score
function grade(score) {
  if (score < 60) {
    return 'F'
  } else if (score >= 60 && score < 70) {
    return 'D'
  } else if (score >= 70 && score < 80) {
    return 'C'
  } else if (score >= 80 && score < 90) {
    return 'B'
  } else if (score >= 90) {
    return 'A'
  }
}

//3. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (over 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function fever(temp) {
  if (temp < 98.6) {
    return 'no fever'
  }
  if (temp > 98.6 && temp <= 103) {
    return 'fever'
  } else if (temp > 103) {
    return 'fever go to hospital'
  }
}
console.log(fever(75));

//4. Write a function that takes in a car object, if it is not moving then return true
let mycar = {
  make: "Ford",
  model: "Mustang",
  color: "Red",
  moving: false
}
// Bang operator. TRY it
function isStopped(car) {
  if (car.moving == false) {
    return true
  }
}

//5. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
  yourDish: true,
  isDirty: true
}

function washDish(dish) {
  if (dish.yourDish.isDirty === true) {
    return true
  }
}

//6. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
  from: 'BOI',
  to: 'LAX',
  prices: {
    standard: 500,
    firstClass: 2200
  }
}, {
  from: 'BOI',
  to: 'SEA',
  prices: {
    standard: 800,
    firstClass: 1200
  }
}, {
  from: 'BOI',
  to: 'CAN',
  prices: {
    standard: 750,
    firstClass: 6200
  }
}]


//***hint: use the find method***
// find itterates over an array and returns the element that is true give a condition
function flightCost(destination, firstClass) {
  // better way of writing the flight ** flights.find(f => f.to == destination)
  let destiny = flights.find(function (flight) {
    return flight.to == destination.toUpperCase()
  })
  if (firstClass != true) {
    return destiny.prices.standard
  } else {
    return destiny.prices.firstClass
  }
}

console.log(flightCost('can', true));
// 7. Given a number 1-7 return the corresponding day of the week.
// allow a secondary argument to change the first day of the week to monday

let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getDayOfWeek(n, offsetForMon) {
  let out = ''
  if (offsetForMon != true) {
    switch (n) {
      case 1:
        out = 'Monday'
        break;
      case 2:
        out = 'Tuesday'
        break;
      case 3:
        out = 'Wednesday'
        break;
      case 4:
        out = 'Thursday'
        break;
      case 5:
        out = 'Friday'
        break;
      case 6:
        out = 'Saturday'
        break;
      case 7:
        out = 'Sunday'
        break;
      default:
        out = 'invalid day'
    }
  }
  else {
    switch (n) {
      case 1:
        out = 'Sunday'
        break;
      case 2:
        out = 'Monday'
        break;
      case 3:
        out = 'Tuesday'
        break;
      case 4:
        out = 'Wednesday'
        break;
      case 5:
        out = 'Thursday'
        break;
      case 6:
        out = 'Friday'
        break;
      case 7:
        out = 'Saturday'
        break;
      default:
        out = 'invalid day'
    }
    return out;
  }
}
console.log(getDayOfWeek(2, true));


  // function dayOfWeek(n) {

  // }









  ///DO NOT MODIFY
  // test.largerNum = largerNum
  // test.grade = grade
  // test.fever = fever
  // test.isStopped = isStopped
  // test.washDish = washDish
  // test.flightCost = flightCost
  // test.getDayOfWeek = getDayOfWeek //