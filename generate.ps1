# set the zola version
$zola_version = "0.5.1"

"Building site for Windows with Zola version ${zola_version}."
$zola_release = "v${zola_version}/zola-v${zola_version}-x86_64-pc-windows-msvc.zip"

# Delete files that may have been created with a previous build
"Cleaning up workspace..."
$directories_to_remove = "build", "amethyst", "zola"
foreach ($directory in $directories_to_remove) {
    Remove-Item $directory -Recurse -Force -ErrorAction SilentlyContinue
}

# Download and unpack the Zola binary, then delete the archive
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Invoke-WebRequest "https://github.com/getzola/zola/releases/download/${zola_release}" -OutFile "zola.zip" 
Expand-Archive zola.zip -DestinationPath zola
Remove-Item "zola.zip" -Recurse -Force -ErrorAction SilentlyContinue

# Go into the `src` directory and use Zola to build our site to the `build` folder
"Building website from source"
Set-Location "src"
Start-Process "../zola/zola.exe" -ArgumentList "build -o ../build"
Set-Location "../"
Remove-Item "zola" -Recurse -Force -ErrorAction SilentlyContinue

# Copy the 404 static file to a specific location
"Deploying the 404 page"
Copy-Item "build/404/index.html" -Destination "build/404.html" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "build/404" -Recurse -Force -ErrorAction SilentlyContinue

# If this is a first run, some folders needed to run this script may need to be created
$directories_to_create = "build/book/", "build/doc/", "amethyst/"
foreach ($directory in $directories_to_create) {
    New-Item "./" -ItemType Directory -Name $directory -ErrorAction SilentlyContinue -Force | Out-Null
}

"Installing dependencies"
# Install install-update
Try { 
    Get-Command "cargo install-update" -ErrorAction Stop | Out-Null
}
Catch {
    "install-update cargo subcommand not found. Installing now."
    Invoke-Expression "cargo install cargo-update" 
}

# Install mdbook
Try {
    Get-Command "mdbook" -ErrorAction Stop | Out-Null
}
Catch {
    "mdbook not found. Installing now."
    Invoke-Expression "cargo install mdbook"
}

# Run install-update
Invoke-Expression "cargo install update -a"

# Clone the Amethyst repo so docs can be built later
Try {
    Get-Command "git" -ErrorAction Stop | Out-Null
}
Catch {
    "Git does not seem to be installed. Please install Git and then rerun this script. \nExiting."
    Exit
}

"Cloning the Amethyst repository"
Invoke-Expression "git clone https://github.com/amethyst/amethyst --branch master amethyst/master" | Out-Null

# Generate cargo documentation without messages, and without building for external dependencies
Set-Location "amethyst/master/"

"Compiling documentation."
Invoke-Expression "cargo doc --all --no-deps --quiet"

"Compiling master branch book"
Invoke-Expression "mdbook build book"

Set-Location "../../"

# TODO: Rest of script