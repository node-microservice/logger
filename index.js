const bunyan = require('bunyan'),
	streams = require('service-logging-streams');

module.exports = function(options) {
	if (!options.name) {
		throw "service name is required. Specify 'name' in config passed to the function"
	}
	return bunyan.createLogger({
		name: options.name,
		version: options.version || { sha: 'unknown'},
		environment: options.environment || 'default',
		streams: streams({
			filename: `${options.name}.log`
		}),
		serializers: bunyan.stdSerializers
	});
}
