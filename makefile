tag=1
project=emoeth
version=0.1

deploy_vue_front_on_github_pages:
	@echo \- DEPLOYING VUE FRONT ON GITHUB PAGES \| Project: $(project) - Version: v$(version); \
	echo \- PULLING THE BRANCH - MASTER; git checkout master; git pull; \
	echo \- UPDATING APP VERSION; json -I -f emoeth-vue-frontend/package.json -e 'this.version="$(version)"'; \
	echo \- BUILDING THE FRONT APPLICATION; cd emoeth-vue-frontend; npm run build; cd ..; \
	echo [$$(date '+%Y-%m-%d %H:%M:%S')] Build v$(version) deployed on Github pages. >> deploy_logs.txt ;\
	echo \- PUSHING STATIC FILES - v$(version); git add emoeth-vue-frontend/dist deploy_logs.txt emoeth-vue-frontend/package.json; git commit -m "Deploy v$(version)"; git push;\
	echo \- DEPLOYING v$(version) TO GITHUB PAGES ; git subtree push --prefix emoeth-vue-frontend/dist origin gh-pages


deploy_vue_front_on_AWS_S3:
	@echo \- DEPLOYING VUE FRONT ON AWS \| Project: $(project) - Version: v$(version); \
	echo \- PULLING THE BRANCH - MASTER; git checkout master; git pull; \
	echo \- UPDATING APP VERSION; json -I -f emoeth-vue-frontend/package.json -e 'this.version="$(version)"'; \
	echo \- BUILDING THE FRONT APPLICATION; cd emoeth-vue-frontend; npm run build; cd ..; \
	echo [$$(date '+%Y-%m-%d %H:%M:%S')] Front build v$(version) deployed on AWS S3. >> deploy_logs.txt ;\
	echo \- PUSHING STATIC FILES - v$(version); git add emoeth-vue-frontend/dist deploy_logs.txt emoeth-vue-frontend/package.json; git commit -m "Front deploy v$(version)"; git push;\
	echo \- DEPLOYING v$(version) TO AWS ; aws s3 cp emoeth-vue-frontend/dist/ s3://emoeth.tech/ --recursive --profile perso


deploy_back_on_AWS_lambda:
	@echo \- DEPLOYING BACK ON AWS LAMBDA \| Project: $(project) - Version: v$(version); \
	echo \- PULLING THE BRANCH - MASTER; git checkout master; git pull; \
	echo \- UPDATING APP VERSION; json -I -f api-emoeth/package.json -e 'this.version="$(version)"'; \
	echo \- DEPLOYING BACK APP TO LAMBDA; export AWS_PROFILE=perso; cd api-emoeth; sls deploy; export AWS_PROFILE=default; cd ..;\
	echo [$$(date '+%Y-%m-%d %H:%M:%S')] Back API v$(version) deployed on AWS Lambda. >> deploy_logs.txt ;\
	echo \- PUSHING LOGS - v$(version); git add deploy_logs.txt api-emoeth/package.json; git commit -m "Back to Lambda deploy v$(version)"; git push