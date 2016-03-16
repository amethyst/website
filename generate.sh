#!/bin/bash

# Rebuilds the website, blog, book, and API documentation from scratch.

rm -rf doc book

git clone https://github.com/ebkalderon/amethyst
cd amethyst
cargo doc --no-deps -p amethyst -p amethyst_engine
mdbook build book
cd ..

cp -r amethyst/book/html/ amethyst/target/doc/ .
mv html book
rm -rf amethyst
