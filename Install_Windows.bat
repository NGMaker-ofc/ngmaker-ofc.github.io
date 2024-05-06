@echo off
title Salvando alterações locais
echo Salvando alterações locais...
git stash
echo Alterações locais salvas.
title Sincronizando repositorio
echo Sincronizando repositorio...
git fetch -a
git reset --hard origin/main
git pull
echo Repositorio sincronizado.
title Restaurando alterações locais
echo Restaurando alterações locais...
git stash pop
echo Alterações locais restauradas.
title Instalando e atualizando dependências
echo Instalando dependências...
pnpm install
echo Dependências instaladas.
