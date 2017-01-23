#!/bin/bash
cp -pr ../build/bundled/* ./
git add *
git commit -m "Updated the dist for phanui.com"
git push origin master

