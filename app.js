// const friends = ["melissa", "marc", "andrew", "nicki"];

// friends.forEach(function (friend) {
//   console.log(`I have a friend named ${friend}`);
// });

// const cats = ["SPARKLES", "PRINCESS", "JABBA"];

// cats.forEach(function (cat) {
//   cat.toLowerCase();
//   console.log(cat);
// });

// const people = [
//   { name: "fred", town: "bedrock" },
//   { name: "susan", town: "hollywood" },
//   { name: "john", town: "miami" },
// ];

// const els = people.map((person, idx) => {
//   const el = document.createElement("div");
//   el.innerHTML = `${person.name} is from ${person.town}`;
//   return el;
// });

// els.forEach((el) => document.body.append(el));

// const instructors = ["alex", "stephanie", "daniel"];

// instructors.map((instructor, idx) => {
//   const isAwesomeArr = [`${instructor} is awesome`];
//   console.log(isAwesomeArr);
// });

//filter method

// const nums = [100, 2, 5, 42, 99];
// const odds = nums.filter((num) => num % 2);
// console.log(odds);

// const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
// const nicePeople = people.filter((person) => !person.includes("jerk"));
// console.log(nicePeople);

//find method

// const cars = [
//   { color: "red", make: "BMW", year: 2001 },
//   { color: "white", make: "Toyota", year: 2013 },
//   { color: "black", make: "Ford", year: 2014 },
//   { color: "white", make: "Tesla", year: 2016 },
// ];

// const firstWhiteCar = cars.find((car) => car.color === "white");
// // firstWhiteCar -> {color: 'white', make: 'Toyota', year: 2013}

// const missingCar = cars.find((car) => car.color === "blue");
// // missingCar -> undefined
// const notTooOldCar = cars.findIndex((car) => car.year === 2014);

// console.log(notTooOldCar);

//some method
const cars = [
  { color: "red", make: "BMW", year: 2001 },
  { color: "white", make: "Toyota", year: 2013 },
  { color: "black", make: "Ford", year: 2014 },
  { color: "white", make: "Tesla", year: 2016 },
];

const hasFord = cars.some((car) => car.make === "Ford");
// hasFord -> true
const myRoom = ["evil monkey", "bed", "lamp"];
const isEvilMonkeyInRoom = myRoom.some((item) => item === "evil monkey");
console.log(isEvilMonkeyInRoom);
