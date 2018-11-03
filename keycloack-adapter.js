const KeycloakConnect = require('keycloak-connect');

const config = {
  'auth-server-url': process.env.KEYCLOAK_SERVER_URL,
  resource: process.env.KEYCLOAK_RESOURCE_NAME,
  realm: process.env.KEYCLOAK_REALM || 'mctic',
  bearerOnly: process.env.KEYCLOAK_BEARER_ONLY || true,
  'public-client': process.env.KEYCLOAK_PUBLIC_CLIENT || true,
  'ssl-required': process.env.KEYCLOAK_SSL_REQUIRED || 'external'
};

let keycloak = new KeycloakConnect({}, config);

keycloak.accessDenied = (request, response) => {
  response.writeHead(403);
  response.end('Acesso Negado.');
};

module.exports = [...keycloak.middleware(), keycloak.protect()];
