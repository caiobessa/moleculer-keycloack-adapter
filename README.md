# moleculer-keycloack-adapter 

### About 

This library is um adapter to use keyclock Bearer autorization with moleculer
API Gatway


### How to Use 

In your code create the file .env with the folowing variable below. 

```shell
KEYCLOAK_SERVER_URL=<auth-server-url>
KEYCLOAK_RESOURCE_NAME=<client-name>
KEYCLOAK_REALM=<RELM_NAME>
KEYCLOAK_BEARER_ONLY=true
KEYCLOAK_PUBLIC_CLIENT=true
KEYCLOAK_SSL_REQUIRED=external
```

After that you code will be working.