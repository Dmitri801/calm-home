const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    headers: {
      "X-Custom-Header": ""
    },
  });


module.exports = {
    unsplash
}