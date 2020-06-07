const unsplash = require('../config').unsplash;

const getRandomMeditative = async (request, reply) => {
  const getRandIndex = arr => Math.floor(Math.random() * arr.length);
  let possibleSearchPhrases = ["meditate", "calm", "peace", "power", "earth"]
  let searchPhrase = possibleSearchPhrases[getRandIndex(possibleSearchPhrases)];
  const response = await unsplash.search.photos(searchPhrase, 1, 20, {orientation: "portrait"})
  const data = await response.json();

  const image = data.results[getRandIndex(data.results)];

  reply
  .header("Access-Control-Allow-Origin", "*")
  .send(image);
}

module.exports = {
    getRandomMeditative
}