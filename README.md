<p align="center">
  <p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png" height="60">
    <img src="https://static.thenounproject.com/png/2663763-200.png" height="60">
    <img src="https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png" height="60" padding-left="10">
    <img src="https://static.thenounproject.com/png/2663763-200.png" height="60">
    <img src="https://vuesax.com/logos/logo-vuesax-svg-7.svg" height="60" padding-left="10">
  </div>
  
  <h3 align="center">Vue + Vuetify (and Vuesax)</h3>
  <p align="center">Front-end site for my personal portfolio/showcase + back API to support it.<p>
</p>

## Structure
- Static front-end `emoeth-vue-frontend`
- API `api-emoeth`: back deployed on an AWS Lambda

## Development

- Front-end

```bash

# cd into the project directory
cd emoeth/emoeth-vue-front-end

# install dependencies
npm install

# Start local dev server
npm run serve
```

- API

```bash

# cd into the api directory
cd emoeth/api-emoeth

# install dependencies
pip install -r requirements.txt

# also install serverless framework and required plugins
sls plugin install -n serverless-wsgi
sls plugin install -n serverless-python-requirements

# Start local dev server
sls wgsi serve
```


## Deployment
### AWS S3 - Front

1. Go on root repository folder: `cd emoeth`
2. Simply launch the make command with the appropriate front version tag: `make deploy_vue_front_on_AWS_S3 version=<NEXT_VERSION>`
3. *Deploy logs are saved in [deploy_logs.txt](./deploy_logs.txt)*

That's it, now the front site gets deployed automatically.

### AWS Lambda - Back

1. Go on root repository folder: `cd emoeth`
2. Simply launch the make command with the appropriate back version tag: `make deploy_back_on_AWS_lambda version=<NEXT_VERSION>`
3. *Deploy logs are saved in [deploy_logs.txt](./deploy_logs.txt)*

That's it, now the back gets deployed automatically to AWS Lambda.

### Github pages
*0. Prior to the deployment, you need to change in `vue.config.js` the following: `publicPath: process.env.NODE_ENV === 'production' ? '/emoeth/' : '/',`*
1. Go on root repository folder: `cd emoeth/emoeth-vue-front-end`
2. Simply launch the make command with the appropriate version tag: `deploy_vue_front_on_github_pages version=<NEXT_VERSION>`
3. *Deploy logs are saved in [deploy_logs.txt](./deploy_logs.txt)*

That's it, now the site gets deployed automatically.
