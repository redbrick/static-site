SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
.DEFAULT_GOAL := help
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

VHOST := /webtree/redbrick/public
DESTDIR := public
HUGO_VERSION := 0.73.0
HUGO := .cache/hugo_$(HUGO_VERSION)
PLATFORM := Linux-64bit

THEME := $(shell awk -F\= '/theme/ {gsub(/"/,"",$$2);gsub(/ /, "", $$2);print $$2}' config.toml)
THEME_DIR := themes/$(THEME)

OPTIMIZE = find $(DESTDIR) -not -path "*/static/*" \( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' \) -print0 | \
xargs -0 -P8 -n2 mogrify -strip -thumbnail '1000>'

$(THEME_DIR):
	git submodule init
	git submodule sync
	git submodule update

build: public  ## Build Site
public: config.toml $(THEME_DIR) content $(HUGO)
	@echo "🍳 Generating site"
	$(HUGO) --gc --minify -d $(DESTDIR)

	@echo "🧂 Optimizing images"
	$(OPTIMIZE)

deploy: $(VHOST) ## Deploy site to blog vhost. This Should be run from a server on redbrick
$(VHOST): clean public
	chown -R webgroup:webgroup $(word 2, $^)
	rsync -avh $(word 2, $^)/* $@

.PHONY: update
update: ## Update themes
	@echo "🛎 Updating Them"
	git submodule update --remote --merge

.PHONY: serve
serve: $(HUGO)  ## Run development server in debug mode
	$(HUGO) server -D -w

.PHONY: clean
clean: ## Clean built site
	@echo "🧹 Cleaning old build"
	rm -rf public resources .cache

.PHONY: lint lint-markdown lint-html format
lint: lint-markdown lint-html ## Run all linter
format: ## Format Markdown files
	@docker run --rm -v $$(pwd):/hugo node:alpine npx prettier --parser=markdown --config /hugo/.prettierrc.toml --write '/hugo/content/**/*.md'
lint-markdown: format ## Run markdown linter
	@echo "🍜 Testing Markdown"
	@docker run --rm -v $$(pwd):/hugo ruby:2-alpine sh -c 'gem install mdl && mdl -i /hugo/content/ -s /hugo/.markdown.style.rb'
lint-html: build ## Run HTML linter
	@echo "🍜 Testing HTML"
	@docker run --rm -v $$(pwd):/hugo ruby:2 sh -c 'gem install html-proofer && htmlproofer --allow-hash-href --check-html --empty-alt-ignore --disable-external /hugo/public'

$(HUGO):
	@echo "🤵 Getting Hugo"
	@wget -q -P tmp/ https://github.com/gohugoio/hugo/releases/download/v$(HUGO_VERSION)/hugo_extended_$(HUGO_VERSION)_$(PLATFORM).tar.gz
	@tar xf tmp/hugo_extended_$(HUGO_VERSION)_$(PLATFORM).tar.gz -C tmp/
	@mkdir -p .cache
	@mv -f tmp/hugo $(HUGO)
	@rm -rf tmp/

.PHONY: help
help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	| sort \
	| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
