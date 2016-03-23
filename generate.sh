#!/bin/bash

# Rebuilds the website, blog, book, and API documentation from scratch.

echo "Cleaning up workspace..."
rm -rf build amethyst cobalt.rs
mkdir build

echo "Generating book and API docs..."
git clone https://github.com/ebkalderon/amethyst
cd amethyst
cargo doc --no-deps -p amethyst -p amethyst_engine
mdbook build book
cd ..

echo "Copying files over..."
cp -r amethyst/book/html/ build/book
cp -r amethyst/book/images/ build/book/images
cp -r amethyst/target/doc/ build/doc
#echo '<meta http-equiv="refresh" content="0; url=amethyst/" />' > web/doc/index.html

echo "Building website from source..."
git clone https://github.com/johannhof/cobalt.rs
cd cobalt.rs
cargo build --release
cd ..

./cobalt.rs/target/release/cobalt build -s src -d ./build --config src/.cobalt.yml
