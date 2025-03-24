.SILENT: # Disable echo of commands
ifneq ("$(wildcard .env)","")
    include .env
endif

SHELL := /bin/bash
export

all: install test

.PHONY: install
install:
	npm install

.PHONY: test
test:
	npm run test

.PHONY: coverage
coverage:
	npm run coverage

.PHONY: lint
lint:
	npm run lint

.PHONY: fix
fix:
	npm run fix

.PHONY: gh-lint
gh-lint:
	npm run lint:gh

# build
.PHONY: build
build:
	npm run build

# run dev web
.PHONY: dev
dev: build
	npm run start

# Used to upgrade all npm packages to latest version without breaking anything
.PHONY: npm-upgrade
npm-upgrade:
	npm prune
	npm list -g npm-check-updates || npm i -g npm-check-updates
	npx ncu -u
	npm update

#####################
# DOCKER API #
#####################

DOCKER_IMAGE_NAME := "shotah/personal_site"
# Deployment: Build the image with the deployment stage

.PHONY: build-no-cache
build-no-cache:
	docker build --no-cache -t $(DOCKER_IMAGE_NAME) .

.PHONY: docker-build
docker-build:
	docker build -t $(DOCKER_IMAGE_NAME) .

.PHONY: docker-run
docker-run: docker-build
	docker run -it --rm -p 443:3000 --name $(DOCKER_IMAGE_NAME) $(DOCKER_IMAGE_NAME)

.PHONY: docker-run-detached
docker-run-detached: docker-build
	docker run -d -p 443:3000 --name $(DOCKER_IMAGE_NAME) $(DOCKER_IMAGE_NAME)

.PHONY: docker-destroy
docker-destroy:
	docker stop $(DOCKER_IMAGE_NAME)
	docker rm $(DOCKER_IMAGE_NAME)


.PHONY: docker-run-dev
docker-run-dev: docker-build
	docker run -it --rm \
		-p 443:3000 \
		-e DB_HOST=localhost \
		--name $(DOCKER_IMAGE_NAME) \
		-v ./src,/usr/src/app/src \
		$(DOCKER_IMAGE_NAME)


.PHONY: docker-push
docker-push:
	docker push $(DOCKER_IMAGE_NAME)


# NOTES:
# sudo docker remove nolfo
# sudo docker pull shotah/nolfo
# sudo docker run -d -p 443:3000 --name nolfo shotah/nolfo

