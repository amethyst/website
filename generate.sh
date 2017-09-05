#!/bin/bash

# Rebuilds the website, blog, book, and API documentation from scratch.

branches=( master develop )
branch_length=${#branches[@]}

echo "Cleaning up workspace..."
rm -rf build src/amethyst src/book/ src/doc/

echo "Recreating base folders"
mkdir -p src/book/
mkdir -p src/doc/
mkdir -p src/amethyst/

echo "Installing dependencies"
cargo install mdbook --force

docs_branch () {
    echo -e "---\nlayout: doc\nbranch: $1\n---" > $2
}

# Output the `index.html` for the documentation page.
docs_branch ${branches[0]} src/doc/index.html

for (( i=0; i<${#branches[@]}; i++ ));
do
    echo "Generating '${branches[$i]}' branch docs"
    git clone https://github.com/amethyst/amethyst --branch ${branches[$i]} src/amethyst/${branches[$i]}

    cd src/amethyst/${branches[$i]}
    cargo doc
    
    echo "Compiling '${branches[$i]}' branch book"
    mdbook build book

    cd ../../../

    echo "Moving '${branches[$i]}' branch documentation and book to /build/"
    mkdir -p src/doc/${branches[$i]}/
    cp -r src/amethyst/${branches[$i]}/target/doc/ src/doc/${branches[$i]}/

    mkdir -p src/book/${branches[$i]}/
    cp -r src/amethyst/${branches[$i]}/book/html/ src/book/${branches[$i]}/
    cp -r src/amethyst/${branches[$i]}/book/images/ src/book/${branches[$i]}/

    # Create branch documentation pages.
    docs_branch ${branches[$i]} src/doc/${branches[$i]}.html
done

echo "Building website from source..."
jekyll build --source src/ --destination build/

