# Auth-node

## curl

```sh
curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' \
    -d '{ "email": "ny.kalash@gmail.com", "name": "krimi", "password": "secret123", "passwordConfirm": "secret123"}'
```
