tag=1
project=emoeth
version=0.1

deploy_vue_front:
	@echo \- DEPLOYING VUE FRONT \| Project: $(project) - Version: v$(version); \
	echo \- PULLING THE BRANCH - MASTER; git checkout master; git pull; \
	echo \- BUILDING THE FRONT APPLICATION; cd emoeth-vue-frontend; npm run build; \
	echo [$$(date '+%Y-%m-%d %H:%M:%S')] Build v$(version) deployed. >> deploy_logs.txt ;\
	echo \- PUSHING STATIC FILES - v$(version); git add dist; git add deploy_logs.txt; git commit -m "Deploy v$(version)"; git push;\
	echo \- DEPLOYING v$(version) TO GITHUB PAGES ; cd ..; git subtree push --prefix emoeth-vue-frontend/dist origin gh-pages
