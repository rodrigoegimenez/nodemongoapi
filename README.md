# nodemongoapi

Simple REST API built on NodeJS and MongoDB
## Running

### Simple

```bash
$ npm install --production
$ node index.js
```

### Inside a Docker container

```bash
$ docker-compose up --build
```

## Testing

After installing and running mongodb, first start the app
```bash
$ npm install --only=dev
$ npm run dev
```

and then run the tests:
```bash
$ npm run test
```
