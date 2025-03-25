.SILENT: # Disable echo of commands
ifneq ("$(wildcard .env)","")
    include .env
endif

SHELL := /bin/bash
export

# --- Project Setup ---
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
		-e EMAIL_SERVER_USER=$(EMAIL_SERVER_USER) \
		-e EMAIL_SERVER_PASSWORD=$(EMAIL_SERVER_PASSWORD) \
		$(DOCKER_IMAGE_NAME)

.PHONY: docker-run-detached
docker-run-detached: docker-build
	docker run -d \
		-p 3000:3000 \
		--name $(DOCKER_CONTAINER_NAME) \
		-e EMAIL_SERVER_USER=$(EMAIL_SERVER_USER) \
		-e EMAIL_SERVER_PASSWORD=$(EMAIL_SERVER_PASSWORD) \
		$(DOCKER_IMAGE_NAME)

.PHONY: docker-destroy
docker-destroy:
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)

.PHONY: docker-push
docker-push:
	docker push $(DOCKER_IMAGE_NAME)

#####################
# DOCKER COMPOSE
#####################
DOCKER_COMPOSE_FILE := docker-compose.yml
REMOTE_USER := christopher
REMOTE_SERVER := 192.168.1.200
REMOTE_PATH := /website/
SERVER_ADDRESS := $(REMOTE_USER)@$(REMOTE_SERVER)

.PHONY: compose-up
compose-up:
	docker compose -f $(DOCKER_COMPOSE_FILE) up -d

.PHONY: compose-down
compose-down:
	docker compose -f $(DOCKER_COMPOSE_FILE) down

.PHONY: compose-build
compose-build:
	docker compose -f $(DOCKER_COMPOSE_FILE) build

.PHONY: compose-restart
compose-restart: compose-down compose-up

.PHONY: copy-all-to-server
copy-all-to-server:
	scp $(DOCKER_COMPOSE_FILE) $(SERVER_ADDRESS):$(REMOTE_PATH) && \
	scp .env $(SERVER_ADDRESS):$(REMOTE_PATH) && \
	scp -r nginx $(SERVER_ADDRESS):$(REMOTE_PATH)
	@echo "All files copied to server successfully!"

.PHONY: deploy-to-server
deploy-to-server: copy-all-to-server
	ssh $(SERVER_ADDRESS) "cd $(REMOTE_PATH) && docker compose -f $(DOCKER_COMPOSE_FILE) down && docker compose -f $(DOCKER_COMPOSE_FILE) up -d"
