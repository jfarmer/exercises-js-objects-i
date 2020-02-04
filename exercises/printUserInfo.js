let process = require('process');
let printFavorites = require('./printFavorites');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {};

user['firstName'] = 'Sam';
user['lastName'] = 'Thompson';
user['currentLocation'] = 'San Francisco';
user['favoriteSongs'] = ['One Song', 'Another Great Song', 'Last Great Song'];
user['age'] = 23;
user['favoriteFood'] = // do I fill this out or put a readlinesync??

user['favoriteMovies'] = ['Inception', 'Moonlight', 'All Dogs Go To Heaven']

// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}

console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();
console.log(user['favoriteMovies']);
console.log(printFavorites(user['favoriteMovies']));

if (user['age'] >= 100) {
  console.log(`Wow! You're ${user['age']} years old? Fewer than 0.2% reach that age.`);
  console.log();
}
