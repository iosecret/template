const proxyMapping = {};

// 接口前缀
const apiPrefix = 'https://api.test.example.com';

// 接口 uri 前缀
const uriPrefix = ['/api'];

// 代理映射
uriPrefix.forEach(uri => {
  proxyMapping[uri] = {
    target: apiPrefix,
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      [`^${uri}`]: apiPrefix + uri,
    },
  };
});

module.exports = {
  port: '{iosecret-port}',
  resolvePath: 'src',
  target: './src',
  publicPath: '/',
  buildPath: './dist',
  copyPath: './public',
  proxy: proxyMapping,
  markdown: false,
};
