.SILENT: # Disable echo of commands
ifneq ("$(wildcard .env)", "")
# MAKE SURE THIS IS SPACES AND NOT TAB!!!
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
DOCKER_IMAGE_NAME := "$(DOCKER_REPO)/$(DOCKER_CONTAINER_NAME):${DOCKER_TAG}"

.PHONY: build-no-cache
build-no-cache:
	docker build --no-cache \
		--build-arg NEXT_PUBLIC_GA_MEASUREMENT_ID=$(NEXT_PUBLIC_GA_MEASUREMENT_ID) \
		-t $(DOCKER_IMAGE_NAME) .

.PHONY: docker-build
docker-build:
	docker build \
		--build-arg NEXT_PUBLIC_GA_MEASUREMENT_ID=$(NEXT_PUBLIC_GA_MEASUREMENT_ID) \
		-t $(DOCKER_IMAGE_NAME) .

.PHONY: docker-run
docker-run: docker-build
	docker run -it --rm \
		-p 3000:3000 \
		--name $(DOCKER_CONTAINER_NAME) \
		-e EMAIL_SERVER_USER=$(EMAIL_SERVER_USER) \
		-e EMAIL_SERVER_PASSWORD=$(EMAIL_SERVER_PASSWORD) \
    -e NEXT_PUBLIC_GA_MEASUREMENT_ID=$(NEXT_PUBLIC_GA_MEASUREMENT_ID) \
		$(DOCKER_IMAGE_NAME)

.PHONY: docker-run-detached
docker-run-detached: docker-build
	docker run -d \
		-p 3000:3000 \
		--name $(DOCKER_CONTAINER_NAME) \
		-e EMAIL_SERVER_USER=$(EMAIL_SERVER_USER) \
		-e EMAIL_SERVER_PASSWORD=$(EMAIL_SERVER_PASSWORD) \
    -e NEXT_PUBLIC_GA_MEASUREMENT_ID=$(NEXT_PUBLIC_GA_MEASUREMENT_ID) \
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

# WSL SCP: DELETE WSL if on Linux
.PHONY: copy-to-server
copy-to-server:
	@echo "Copying files to $(SERVER_ADDRESS)..."
	wsl scp -i ~/.ssh/id_rsa -r $(DOCKER_COMPOSE_FILE) .env nginx $(SERVER_ADDRESS):$(REMOTE_PATH)
	@echo "All files copied to server successfully!"

.PHONY: deploy-to-server
deploy-to-server: copy-to-server
	@echo "Deploying application on the $(SERVER_ADDRESS)..."
	wsl ssh $(SERVER_ADDRESS) "cd $(REMOTE_PATH) && \
		sudo -S docker pull $(DOCKER_IMAGE_NAME) && \
		sudo -S docker-compose -f $(DOCKER_COMPOSE_FILE) down && \
		sudo -S docker-compose -f $(DOCKER_COMPOSE_FILE) up -d"
	@echo "Application deployed successfully!"

.PHONY: debug
debug:
	@echo "REMOTE_USER=$(REMOTE_USER)"
	@echo "REMOTE_SERVER=$(REMOTE_SERVER)"
	@echo "SERVER_ADDRESS=$(SERVER_ADDRESS)"
