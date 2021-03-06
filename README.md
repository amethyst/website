# ⚠️ This repo is now deprecated, a new setup and design is on the way! ⚠️

# amethyst.rs website

This project contains the official amethyst website, deployed at [amethyst.rs](https://amethyst.rs) and [amethyst-engine.org](https://amethyst-engine.org).  
It's built using [gatsby.js](https://gatsbyjs.org) and [bulma](https://bulma.io), the content is hosted over at [prismic](https://prismic.io) while the app itself is hosted at [netlify](https://netlify.com).

## Development

If you want to run the website locally, just clone the repo, run `npm install` and then `npm start` or `npm run develop` to start the local development server. No environment variables are needed since the prismic repository is public due to our open source plan.

## Docs and Book

The documentation and book have moved out of the website repository and can now be found at the subdomains [docs.amethyst.rs](https://docs.amethyst.rs) and [book.amethyst.rs](https://book.amethyst.rs). If you're interested in how they're built and deployed, you can check out [amethyst-docs-builder](https://github.com/amethyst/amethyst-docs-builder), the service that makes sure they're up to date.
