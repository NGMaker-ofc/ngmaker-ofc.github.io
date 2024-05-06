@echo off
title Compilando aplicacao
echo Compilando aplicacao...
pnpm run build:windows
echo Aplicacao compilada com sucesso!
echo Preparando para enviar ao repositorio remoto...
git add .
git commit -m "Build %date%"
git push
echo Envio para o repositorio remoto efetuado!
echo Realizando deploy...
pnpm run deploy
echo Deploy efetuado com sucesso!
pause
exit
