---
title: Docker, The 'Cloud' in a box
date: 2017-02-21 16:15:35
type: tutorial
keywords:
  - help
  - tutorials
  - helpdesk
---

{% reveal https://redbrick.github.io/admin-training/docker/ 800 600 %}

# Setting up docker-compose for services

## Prerequisites
CentOS 7 || Ubuntu 16.04 || Arch || coreOS

## Set up Docker

CoreOS all ready comes with docker so it can skip to the next step  
If your on arch just run `pacman -S docker docker-compose`  
For centos and ubuntu follow the instructions below  
Add docker repos and install it
!!!!VERY IMPORTANT NEVER PIPE TO SHELL !!!!!

``` bash
curl -fsSL https://get.docker.com/ >> getdocker.sh
less getdocker.sh
bash getdocker.sh
```
Add docker compose
``` bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.10.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```
You should get `docker-compose version: 1.10.0` or higher

## Set Up services

1. First create a folder to keep all the files. I suggest `/ect/docker-compose/services/`
  run `sudo mkdir /ect/docker-compose/services/`
2. Add services
  ``` bash
  cd /etc/docker-compose/services
  mkdir nginx
  cd nginx
  docker network create --driver bridge nginx-proxy
  wget https://raw.githubusercontent.com/jwilder/nginx-proxy/master/nginx.tmpl
  wget https://raw.githubusercontent.com/redbrick/admin-training/master/docker/docker-compose.yml
  docker-compose up -d
```

If you browse to port HTTPS on 443 on your domain and it'll be your docker nginx instance running.
To explain what we did we created a network for all the containers to communicate over then using docker compose the containers where created with the specifications we set in the docker-compose.yml  
We can manage these containers like any other containers with `docker stop` and `docker restart` or use docker-compose, such as the command `docker-compose logs`

We created a landing page which servers html from `/var/www/main` on the host machine  
A Plex server is now running bound to port 32400 on the host machine serving media from `/var/tv` and `/var/movies`  
A next cloud server that acts as your private dropbox

{% include_code [docker-compose] [lang:yaml] ./docker-compose.yml %}
