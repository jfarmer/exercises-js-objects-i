function printFavorites(array) {
  console.log('Looks like you have great taste! Your favorites:');

  for (let i = 0; i < array.length; i += 1) {
    let position = i + 1;
    let favoriteName = array[i];

    console.log(`${position}. ${favoriteName}`);
  }
}
console.log(printFavorites(['hey', 'there', 'hi']));
