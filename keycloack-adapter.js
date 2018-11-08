const KeycloakConnect = require('keycloak-connect');



const createKeycloakConnect = config  =>{
  let keycloak = new KeycloakConnect({}, config);
  keycloak.accessDenied = (request, response) => {
    response.writeHead(403);
    response.end('Accesss Denied');
  }; 
  return [...keycloak.middleware(), keycloak.protect()];
}


module.exports = createKeycloakConnect;
