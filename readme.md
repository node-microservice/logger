# logger

Simple bunyan-based logger for koa – intended to work with [@microservice/koa-logging](https://github.com/node-microservice/koa-logging)

## Example Usage

```javascript
const config = require('/path/to/config'),
	logging = require('@microservice/koa-logging'),
	koa = require('koa');

const logger = require('@microservice/logger')({
	name: 'some-service-name',
	environment: config.environment,
	version: require('./version')
});

const app = koa()

...

app.use(logging(logger))

...

```

## Future

Fluentd integration
