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

const instructors = ["alex", "stephanie", "daniel"];

instructors.map((instructor, idx) => {
  const isAwesomeArr = [`${instructor} is awesome`];
  console.log(isAwesomeArr);
});
