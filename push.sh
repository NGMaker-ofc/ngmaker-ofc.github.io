#!/bin/bash
echo "Preparando para enviar ao repositorio remoto..."
git add .
git commit -m "Build $(date +%Y-%m-%d)"
git push
echo "Envio para o repositorio remoto efetuado!"
echo "Realizando deploy..."
pnpm run deploy
echo "Deploy efetuado com sucesso!"
