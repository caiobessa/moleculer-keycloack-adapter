# moleculer-keycloack-adapter 

### About 

This library is an adapter to use keycloak Bearer authorization with the Moleculer API gateway


### How use 

In your API Gatway create this import
```js
const keycloack = require("moleculer-keycloack-adapter");
```

Create objet with the configurations:

```js
const keycloakMiddlewares = keycloack({
	'auth-server-url': 'http://localhost:8180/auth',
	resource: 'exemple-service',
	realm: 'moleculer',
	bearerOnly:  false,
	'public-client': true,
    'ssl-required': 'external'});
```

 Add object in you middlewares

 ```js 

 	settings: {
        use: [...keycloakMiddlewares],
     }

 ``` 


Full code exemple
```js
"use strict";
const ApiGateway = require("moleculer-web");
const keycloack = require("moleculer-keycloack-adapter");

const keycloakMiddlewares = keycloack({
	'auth-server-url': 'http://localhost:8180/auth',
	resource: 'exemple-service',
	realm: 'moleculer',
	bearerOnly:  false,
	'public-client': true,
    'ssl-required': 'external'});

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,
		use: [...keycloakMiddlewares],

		routes: [{
			path: "/api",
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			]
		}],

		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};
```



*** If have any ideias of queries fell free to open a issue
