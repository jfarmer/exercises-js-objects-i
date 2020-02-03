let process = require('process');

/*
  To get started:

  1. Remove the lines involving the removeThisToStart variable, so that the
     program doesn't exit early.
  2. Implement userCanAffordSofa
*/


/**
 * Creates and returns a new user (as an array).
 */
function newUser(firstName, lastName, budget, email) {
  let user = [];

  user[0] = firstName;
  user[1] = lastName;
  user[2] = budget;
  user[3] = email;

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
if (sofa[1] <= user[2]){
  return true;
} else {
  return false;
}
}

let allUsers = [
  newUser('Alyssa', 'Morris', 1800.00, 'alyssaMorris@gmail.com' ),
  newUser('Mindy', 'Weaver', 200.00, 'MindyWeaver@gmail.com'),
  newUser('Louis', 'Washington', 850.00, 'LouisWashington@gmail,com'),
  newUser('Kevin', 'Isaacs', 80.00, 'KevinIsaacs@gmail.com'),
];

let allSofas = [
  newSofa('Nice Sofa', 800.00),
  newSofa('Big Sofa', 500),
  newSofa('Sofa for broke people', 20) ];

for (let user of allUsers) {
  for (let sofa of allSofas){
  console.log('--------------------');
  console.log();

  console.log(`Hi, ${user[0]}.`);
  console.log(`Checking whether you can afford a ${sofa[0]}, please hold on....`);
  console.log();

  if (userCanAffordSofa(user, sofa)) {
    console.log('Congratulations!');
    console.log(`A ${sofa[0]} costs ${sofa[1]}, which is within your budget of ${user[2]}!`);
    console.log();
    console.log(`We will email you with further action required for checkout at ${user[3]}`);
  } else {
    console.log(`Sorry, ${user[0]}, but you can't afford a ${sofa[1]}.`);
    console.log(`Your budget is ${user[2]}, but a ${sofa[0]} costs ${sofa[1]}.`);
  }

  console.log();
}
}

console.log('--------------------');
