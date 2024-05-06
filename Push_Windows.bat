@echo off
title Compilando aplicacao
echo Compilando aplicacao...
bun run build:windows
echo Aplicacao compilada com sucesso!
git add .
git commit -m "Build %date%"
git push
echo "Aplicacao compilada e enviada para o repositorio remoto com sucesso!"