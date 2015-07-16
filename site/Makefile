NODE_ENV?=development
NODE_OPTIONS?=''
APP_ENV?=development
HOST?=$(shell ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | awk '{print $1}')
PORT?=3000
APP_OPTIONS?=
SUBDOMAIN?=empirenode
TAG?=
SERVER=$(shell curl ipecho.net/plain)
APP_NAME=empirenode
PROJECT_DIR=$(shell pwd)

start:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	HOST=$(HOST) \
	PORT=$(PORT) \
	meteor -p $(PORT) --settings ./config/$(APP_ENV)/settings.json --mobile-server $(HOST):$(PORT) $(APP_OPTIONS)

debug:
	NODE_OPTIONS='--debug' \
	HOST=$(HOST) \
	PORT=$(PORT) \
	meteor debug -p $(PORT) --settings ./config/$(APP_ENV)/settings.json

deploy:
	meteor deploy https://$(APP_NAME).meteor.com --settings ./config/$(APP_ENV)/settings.json

mongo:
	meteor mongo

# runs code concat, minification, etc.
start-prod:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	HOST=$(HOST) \
	PORT=$(PORT) \
	meteor -p $(PORT) --production --settings ./config/$(APP_ENV)/settings.json

tag:
	git tag -a $(TAG) -m 'tagging release'
	git push origin $(TAG)

hard-reset:
	meteor reset
	rm -rf .meteor/local
