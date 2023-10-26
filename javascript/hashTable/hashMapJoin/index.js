function leftJoin(synonyms, antonyms) {
  const results = {};

  for (let keys in synonyms) {
    const synonym = synonyms[keys];

    if (keys in antonyms) {
      results[keys] = { synonym, antonym: antonyms[keys] };
    } else {
      results[keys] = { synonym, antonym: null };
    }
  }

  return results;
}

module.exports = leftJoin;
