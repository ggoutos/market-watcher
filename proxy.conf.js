const PROXY_CONFIG = {
	'/api': {
		target: `https://192.168.45.198:5001`,
		secure: false,
		logLevel: 'debug',
		changeOrigin: true,
	}
};
module.exports = PROXY_CONFIG;
