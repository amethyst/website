#!/bin/bash

# Rebuilds the website, blog, book, and API documentation from scratch.
# This script assumes you have cargo installed.

# Set the zola version
zola_version="0.5.1"

# Get the correct release based on the currently running OS
if [[ "$OSTYPE" == "linux-gnu" ]]; then
    zola_os="unknown-linux-gnu"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    zola_os="apple-darwin"
elif [[ "$OSTYPE" == "cygwin" || "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Notify the user that they should use a powershell script
    echo "Windows is not currently supported. Track this issue here: https://github.com/amethyst/website/issues/142"
    echo "Exiting."
    exit 1
else
    # OS is not supported.  Notify the user and exit.
    echo "Your system (${OSTYPE}) is not currently supported.  To add support, consider opening an issue or pull request on the repository: https://github.com/amethyst/website."
    echo "Exiting."
    exit 1
fi

echo "Building site for ${zola_os} with Zola version ${zola_version}."
zola_release="v${zola_version}/zola-v${zola_version}-x86_64-${zola_os}.tar.gz"

# Delete files that may have been created with a previous build
echo "Cleaning up workspace..."
rm -rf build
rm -rf amethyst

# Download and unpack the Zola binary, then delete the archive
echo "Downloading zola"
curl -L -o zola.tar.gz https://github.com/getzola/zola/releases/download/${zola_release}
tar -xvf zola.tar.gz -C ./
rm zola.tar.gz

# Go into the `src` directory and use Zola to build our site to the `build` folder
echo "Building website from source"
cd src
../zola build -o ../build
cd ..
rm zola

# Copy the 404 static file to a specific location
echo "Deploying the 404 page"
cp build/404/index.html build/404.html
rm -rf build/404

# If this is a first run, some folders needed to run this script may need to be created
echo "Recreating base folders (if needed)"
mkdir -p build/book/
mkdir -p build/doc/
mkdir -p amethyst/

echo "Installing dependencies"
cargo install-update --version || cargo install cargo-update;
mdbook --version || cargo install mdbook;
cargo install-update -a;

# Clone the Amethyst repo so docs can be built later
git clone https://github.com/amethyst/amethyst --branch master amethyst/master
cd amethyst/master

# Generate cargo documentation without messages, and without building for external dependencies
cargo doc --all --no-deps --quiet

echo "Compiling master branch book"
mdbook build book

cd ../../

echo "Moving '${branches[$i]}' branch documentation and book to /build/"
mkdir -p build/doc/master/
cp -r amethyst/master/target/doc/ build/doc/master/

mkdir -p build/book/master/
mv -f amethyst/master/book/book/* build/book/master/

# Alias master doc and book to develop for backwards comp
mkdir -p build/doc/develop
cp -r build/doc/master build/doc/develop
cp -r build/book/master build/book/develop

# Build latest tag
cd amethyst/master
LATEST_TAG=$(git describe --abbrev=0 --tags)

echo "Checking out tag $LATEST_TAG to build latest docs and bogok"
git checkout -q $LATEST_TAG

cargo doc --all --no-deps --quiet

echo "Compiling $LATEST_TAG branch book"
mdbook build book

cd ../../

echo "Moving latest release documentation and book to /build/"
mkdir -p build/doc/latest/
cp -r amethyst/master/target/doc/ build/doc/latest/

mkdir -p build/book/latest/
mv -f amethyst/master/book/book/* build/book/latest/

touch build/doc/latest/VERSION
echo "$LATEST_TAG" > build/doc/latest/VERSION

cd amethyst/master
for tag in $(git tag)
do
    echo "Checking out tag $tag to build latest docs and book"
    git checkout -q $tag

    echo "Compiling $tag branch book"
    mdbook build book

    cd ../../

    mkdir -p build/book/$tag/
    mv -f amethyst/master/book/book/* build/book/$tag/

    cd amethyst/master
done
cd ../../

cd build/
if [[ "$zola_os" == "apple-darwin" ]]; then
    # MacOS sed is slightly different 
    find . -name "*.html" -type f -exec sed -i '.original' -e 's/##LATEST_RELEASE_TAG##/'"$LATEST_TAG"'/g' '{}' \;
else
    find . -name "*.html" -type f -exec sed -i 's/##LATEST_RELEASE_TAG##/'"$LATEST_TAG"'/g' '{}' \;
fi
