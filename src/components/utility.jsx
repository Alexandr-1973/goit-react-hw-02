function upperNameButton(word) {
  let nameButton = word[0].toUpperCase();
  for (let i = 1; i < word.length; i += 1) {
    nameButton += word[i];
  }
  return nameButton;
}

export default upperNameButton;
