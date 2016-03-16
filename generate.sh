#!/bin/bash

# Rebuilds the website, blog, book, and API documentation from scratch.

echo "Cleaning up workspace..."
rm -rf _posts doc blog.css book cover.css index.html

git clone https://github.com/ebkalderon/amethyst
cd amethyst
cargo doc --no-deps -p amethyst -p amethyst_engine
mdbook build book
cd ..

echo "Copying files..."
cp -r amethyst/book/html/ book
cp -r amethyst/book/images/ book/images
cp -r amethyst/target/doc/ .
echo '<meta http-equiv="refresh" content="0; url=amethyst/" />' > doc/index.html

echo "Building blog..."
cobalt build -s blog/

git add --all
git commit -m "Regenerate website"
git push -u origin master
