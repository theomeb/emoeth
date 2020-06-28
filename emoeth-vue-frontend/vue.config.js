process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  //publicPath: process.env.NODE_ENV === 'production' ? '/emoeth/' : '/', if github-pages deployment
};
