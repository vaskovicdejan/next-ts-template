#!/bin/sh

CUR=$(pwd)

CURRENT=$(cd $(dirname $0);pwd)
echo "${CURRENT}"

cd "${CURRENT}"
git pull --prune
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi
echo ""
pwd
yarn set version berry && git add .yarn/releases && rm -rf node_modules yarn.lock .yarn/cache && touch yarn.lock && yarn install && yarn up -R && yarn lint-fix && yarn build
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi
git commit -am "Bumps node modules" && git push
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi

cd "${CUR}"
