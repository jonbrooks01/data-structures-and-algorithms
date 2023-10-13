function repeatedWord(inputStr) {
  const words = inputStr.split(" ");

  const wordRepeat = {};

  for (const word of words) {
    const cleanWord1 = word
      .toLowerCase()
      .replace(/[.,\/#!$?%^&*;:{}=\-_`~()]/g, "");

    if (wordRepeat[cleanWord1]) {
      return cleanWord1;
    } else {
      wordRepeat[cleanWord1] = true;
    }
  }
  return "No words match";
}

module.exports = repeatedWord;
