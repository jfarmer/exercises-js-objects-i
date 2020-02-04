let process = require('process');

/**
 * Creates and returns a new user (as an array).
 */
function newUser(firstName, lastName, budget) {
  let user = [];

  user[0] = firstName;
  user[1] = lastName;
  user[2] = budget;

  return user;
}

/**
 * Creates and returns a new sofa (as an array).
 */
function newSofa(name, price) {
  let sofa = [];

  sofa[0] = name;
  sofa[1] = price;

  return sofa;
}

/**
 * Returns `true` if the given user can afford to buy the given sofa
 * and `false` otherwise.
 */
function userCanAffordSofa(user, sofa) {
  if (sofa[1] > user[2]) {
    return false;
  } else {
    return true;
  }
}

let allUsers = [
  newUser('Alyssa', 'Morris', 1800.00),
  newUser('Mindy', 'Weaver', 200.00),
  newUser('Louis', 'Washington', 850.00),
  newUser('Kevin', 'Isaacs', 80.00),
];

let sofa = newSofa('Nice Sofa', 800.00);

for (let user of allUsers) {
  console.log('--------------------');
  console.log();

  console.log(`Hi, ${user[0]}.`);
  console.log(`Checking whether you can afford a ${sofa[0]}, please hold on....`);
  console.log();

  if (userCanAffordSofa(user, sofa)) {
    console.log('Congratulations!');
    console.log(`A ${sofa[0]} costs ${sofa[1]}, which is within your budget of ${user[2]}!`);
  } else {
    console.log(`Sorry, ${user[0]}, but you can't afford a ${sofa[0]}.`);
    console.log(`Your budget is ${user[2]}, but a ${sofa[0]} costs ${sofa[1]}.`);
  }

  console.log();
}

console.log('--------------------');
