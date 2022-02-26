const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/productinfo', {
      target: 'http://localhost:3001', // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/productinfo": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/productreview', {
      target: 'http://localhost:3002', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/productreview": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}
