const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

const configs = {
	test: {
		port: 3999,
	},
	dev: {
		port: 3009,
	},
};

module.exports = configs[env];
