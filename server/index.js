require('dotenv').config();
const fetch = require('node-fetch');
global.fetch = fetch;
const fastify = require('fastify')({
    logger: true
  });
const unsplashController = require("./controllers/unsplashController");

// Routes
fastify.get("/api", (request, reply) => reply.send({up: "Yes we are up"}))
fastify.get('/api/unsplash/get-random-meditative', unsplashController.getRandomMeditative); 

fastify.listen(3000, function (err, PORT) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${PORT}`)
  });