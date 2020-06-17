module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  //publicPath: process.env.NODE_ENV === 'production' ? '/emoeth/' : '/', if github-pages deployment
};
