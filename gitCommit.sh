#!/bin/bash
cp -pr ../build/unbundled/* ./
git add *
git commit -m "Updated the dist for phanui.com"
git push origin master

