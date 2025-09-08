#!/bin/bash
echo "Resetando ambiente local..."
git fetch -a
git reset --hard origin/main
echo "Iniciando servidor de desenvolvimento..."
pnpm run dev
