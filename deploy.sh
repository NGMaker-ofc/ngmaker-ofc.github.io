#!/bin/bash
service=ngmaker
compose_dir="/opt/storage/containers"

# set -x
set -e

git fetch -a
git reset --hard origin/main

docker build -t $service .
docker save $service:latest > $service-production.tar

docker-compose -f $compose_dir/compose.yaml down $service

docker rmi -f $service:latest

cat $service-production.tar | docker load

cd $compose_dir

docker-compose -f $compose_dir/compose.yaml up -d $service
