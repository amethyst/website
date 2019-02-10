#!/bin/bash

echo "Cleaning up workspace..."
rm -rf build

echo "Building website from source"
cd src
zola build -o ../build 
cd ..