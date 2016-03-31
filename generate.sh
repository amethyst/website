#!/bin/bash

# Rebuilds the website, blog, book, and API documentation from scratch.

echo "Cleaning up workspace..."
rm -rf build amethyst cobalt.rs
mkdir build

echo "Generating API docs..."
git clone https://github.com/amethyst/amethyst
cd amethyst
cargo doc --no-deps -p amethyst -p amethyst_ecs -p amethyst_engine -p amethyst_renderer
cd ..

echo "Generating book..."
git clone https://github.com/azerupi/mdBook
cd mdBook
git reset --hard 925939e26720e1998796a1735c296048c99ee7f8
cargo build --release
cd ..
./mdBook/target/release/mdbook build amethyst/book

echo "Copying files over..."
cp -r amethyst/book/html/ build/book
cp -r amethyst/book/images/ build/book/images
cp -r amethyst/target/doc/ build/doc
#echo '<meta http-equiv="refresh" content="0; url=amethyst/" />' > web/doc/index.html

echo "Building website from source..."
git clone https://github.com/cobalt-org/cobalt.rs
cd cobalt.rs
cargo build --release
cd ..

./cobalt.rs/target/release/cobalt build -s src -d ./build --config src/.cobalt.yml
