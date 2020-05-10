const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

const configs = {
	dev: {
		port: 3009,
  },
  production: {
    port: 3000
  }
};

module.exports = configs[env];
