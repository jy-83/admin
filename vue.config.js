const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:4000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/css/theme.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {}
    }
  }
});
