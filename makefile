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
dev:
	npm run dev

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
DOCKER_CONTAINER_NAME := "blodgett-site"
DOCKER_IMAGE_NAME := "shotah/$(DOCKER_CONTAINER_NAME)"
# Deployment: Build the image with the deployment stage

.PHONY: build-no-cache
build-no-cache:
	docker build --no-cache -t $(DOCKER_IMAGE_NAME) .

.PHONY: docker-build
docker-build:
	docker build -t $(DOCKER_IMAGE_NAME) .

.PHONY: docker-run
docker-run: docker-build
	docker run -it --rm \
		-p 3000:3000 \
		--name $(DOCKER_CONTAINER_NAME) \
		-e NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$(NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) \
		-e NEXT_PUBLIC_EMAILJS_SERVICE_ID=$(NEXT_PUBLIC_EMAILJS_SERVICE_ID) \
		-e NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$(NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) \
		$(DOCKER_IMAGE_NAME)

.PHONY: docker-run-detached
docker-run-detached: docker-build
	docker run -d \
		-p 3000:3000 \
		--name $(DOCKER_CONTAINER_NAME) \
		-e NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$(NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) \
		-e NEXT_PUBLIC_EMAILJS_SERVICE_ID=$(NEXT_PUBLIC_EMAILJS_SERVICE_ID) \
		-e NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$(NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) \
		$(DOCKER_IMAGE_NAME)

.PHONY: docker-destroy
docker-destroy:
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)

.PHONY: docker-push
docker-push:
	docker push $(DOCKER_IMAGE_NAME)
