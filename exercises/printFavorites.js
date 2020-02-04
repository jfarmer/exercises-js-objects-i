let readlineSync = require('readline-sync')

function printFavorites() {
  let user = {};
  // sets this up for a dictionary, the diff aspects of the user are in here

  user['favoriteCategory'] = readlineSync.question('What category of favorites is this?');
  user['favoritesList'] = readlineSync.question(`What are your top 3 favorite ${user['favoriteCategory']}?`);
  // how can i determine a length to a readlinesync idea??
  // because the for loop goes through each letter individually rather than the whole world
  console.log(`Looks like you have great taste in ${user['favoriteCategory']}. Your favorites:`);

  for (let i = 0; i < user['favoritesList'].length; i += 1) {
    let position = i + 1;
    let favoriteName = user['favoritesList'][i];

    console.log(`${position}. ${favoriteName}`);
  }
}
console.log(printFavorites());
