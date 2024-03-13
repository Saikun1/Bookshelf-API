// saikun - 3220006
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

(async () => {
  // Initialize the server.
  const server = Hapi.server({
    port: 3003,
    host: 'localhost',
    routes: {
      cors: true,
    },
  });

  // Add the routes.
  server.route(routes);

  // Start the server.
  await server.start();
  console.log('Server running on %s', server.info.uri);
})();