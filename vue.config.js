const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  transpileDependencies: true,
  devServer: {
    open: false,//open 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页
    host: 'localhost',//默认是 localhost。如果你希望服务器外部可访问，指定如下 host: '0.0.0.0'，设置之后之后可以访问ip地址
    port: 8080,
    https: false,
    hot: true,//hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。

    proxy: {
      '/todolist': {
        target: 'http://localhost:8088',
        pathRewrite: { '^/todolist': 'todolist' },
        ws: false, //代理websockets
        secure: false, //false为http访问，true为https访问
        changeOrigin: true, //是否跨域
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return '/index.html';
          }
        },
      },
      // '/demo': {
      //   target: 'https://www.demo/',
      //   pathRewrite: { '^/demo': '' },
      //   ws: false,
      //   changeOrigin: true
      // },
    }
  }
})
