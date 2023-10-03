function compareYear(obj) {
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0 + 1; j < obj.length; j++)
      if (obj[i].year >= obj[j].year) {
        const temp = obj[i];

        obj[i] = obj[j];
        obj[j] = temp;
      }
  }
}

function compareTitle(movieA, movieB) {
  const title1 = movieA.title.replace(/^(The|A|An)\s+/i, "");
  const title2 = movieB.title.replace(/^(The|A|An)\s+/i, "");

  return title1.localeCompare(title2);
}

module.exports = { compareYear, compareTitle };
