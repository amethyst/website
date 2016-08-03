#!/bin/bash

# Rebuilds the website, blog, book, and API documentation from scratch.

echo "Cleaning up workspace..."
rm -rf build amethyst cobalt.rs
mkdir build

echo "Generating API docs..."
echo "  Generating master branch docs"
git clone https://github.com/amethyst/amethyst --branch master
cd amethyst
  cargo doc --no-deps -p amethyst -p amethyst_ecs -p amethyst_renderer -p amethyst_engine # TODO: need to update this on the next release
cd ..

echo "  Generating develop branch docs"
git clone -b develop https://github.com/amethyst/amethyst amethyst_dev
cd amethyst_dev
  cargo doc --no-deps -p amethyst -p amethyst_ecs -p amethyst_context -p amethyst_renderer
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

mkdir -p build/doc
cp -r amethyst/target/doc/ build/doc/master
cp -r amethyst_dev/target/doc build/doc/develop
#echo '<meta http-equiv="refresh" content="0; url=amethyst/" />' > web/doc/index.html

echo "Building website from source..."
cargo install cobalt-bin

cobalt build

