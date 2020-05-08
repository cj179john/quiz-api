module.exports = function notFoundDataMiddleware(req, res, eventEmitter) {
	eventEmitter.emit('error', { response: res, status: '500', message: 'invalid request' });
};
