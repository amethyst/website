+++
title = "Amethyst is growing; news on ongoing projects"
description = "We want to share some of the progress being made on Amethyst! As we've had a lot of expansion, we've also revamped the way we manage the project and we have some very interesting new features being worked on."
date = 2018-10-14
+++

We are thrilled to share with you some progress on the development of [the Amethyst game engine](https://www.amethyst.rs), a data-driven game engine written in Rust. Lately, there has been a ton of activity and expansion, so much that we now need to change the way we will manage the project. We also want to share with you some information on the very interesting upcoming features being worked on.

## New teams

As you might have seen [on Discord already](https://discord.gg/GnP5Whs), we've created
[a proposal](https://gist.github.com/torkleyy/e89971b1c65a8e261a21220120df443a) for a new structure for teams. We are introducing those changes in order to make contribution to the engine happen faster, most notably with less friction when merging pull requests.
This proposal introduces a Core team, responsible for the overall management and direction of the project. Its main role will be to handle administrative tasks, such as publishing crates, managing the GitHub organization, and so forth. They will also be handling validation of RFCs chosen by the community to be merged into the engine. We believe that way we can make the engine thrive in a coherent way while making expansion fast and community-driven.

Additionally, we are introducing new specialized teams of contributors. These teams each focus on a specific field of the engine (such as rendering, networking, tooling, etc.) and while being purely indicative (a member of a team is of course not restricted to that field), they do grant write access to the engine's repositories. This should hopefully make the merging process even faster as we will now have more trusted reviewers to check on contributors' pull requests. Many highly motivated contributors have been working on the engine lately, including game engine and game development professionals, and this should allow them to work in a better environment.

One last thing; we introduced a policy regarding inactivity. In order to make sure teams don't grow overpopulated (which could bring issues; most notably when voting for important decisions), we needed a way to regulate the amount of inactive members.
Once a member is inactive, code- and community-wise, for at least 6 months, we are going to remove them from the displayed teams.
Should they ever decide to come back, they'll be re-added. This should keep our organization relatively
clean and avoid having members who are not interested in Amethyst anymore. Open source software contributors come and go, passing the project to the following generation, and this will help us embrace this philosophy.

### New members

Here are a couple of active contributors that are now members of a team:

* [@magnonellie](https://github.com/magnonellie) was added to engine-devs (general), render-devs (renderer) and website-devs (website and communication)
* [@azriel91](https://github.com/azriel91) was added to engine-devs (general)
* [@fhaynes](https://github.com/fhaynes) and [@TimonPost](https://github.com/TimonPost) were added to net-devs (networking)

## Interesting progress on various parts of the engine

Speaking of net-devs, we're really excited how laminar, our semi-reliable UDP networking protocol, is going to evolve.
Be sure to check out [the repo](https://github.com/amethyst/laminar) and the
[draft about networking](https://docs.google.com/document/d/1YghHzG17Y9SKkgajyO4Dzf3YEcmAMJ6lQFT0o6yQzZ8/edit).
Thank you fhaynes, TimonPost and LucioFranco for all the work you're putting into this!
This protocol implementation is specifically designed for the needs of fast-paced games. It will be used by Amethyst's higher-level networking APIs, but is itself independent of the engine which means it's usable in non-Amethyst games, too, so check it out!

More progress is also being made design-wise on [our Discord server](https://discord.gg/GnP5Whs), our main communication channel, and we are welcoming any help!

Networking is not the only field with interesting developments:
- The 3D renderer is currently [being entirely rewritten](https://github.com/rustgd/rendy) for modern technologies (such as Vulkan/Metal/DirectX12 backends, VR, etc.), more advanced features and generally improved performances. We are looking for additional contributors experienced with 3D graphics, so if you want to get involved, please reach out to us.
- A [new asset pipeline](https://github.com/amethyst/amethyst/issues/875) to support advanced deployment architectures is being designed and prototyped. This should both help integrate professional-grade workflows into the engine (with build-time and deployment-time configuration to save computational load from the runtime) and diminish the burden of asset management for developers and artists. With this, we want to enable highly scalable development processes with the engine, even on large commercial games.
- A prototype contest for experimental Amethyst editors is happening to help us decide what technology is most adapted for our long term upcoming game development editor. We are currently looking for more people to create prototypes for different technologies ([a prototype made using web technologies already exists](https://github.com/randomPoison/amethyst-editor)).

If you have experience designing gamedev stuff, suggestions for new features, or simply want to help us implement stuff, feel free to come and join us on Discord! (we're nice)

What's next? We're currently working hard to get the next version, 0.9, out. That release will be especially helpful
to people planning to develop 2D games, since it comes with a ton of sprite rendering improvements. If you want to help with the last remaining bugfixes,
feel free to go through [the 0.9 milestone](https://github.com/amethyst/amethyst/issues?q=is%3Aopen+is%3Aissue+milestone%3A0.9).

We cannot wait for more progress to be done and are very enthusiastic for the future of the Amethyst engine and the Rust gamedev ecosystem. We hope to see you soon, and as always, if you need any help using the engine, check out [our subreddit](https://reddit.com/r/Amethyst) or [our Discord server](https://discord.gg/GnP5Whs).
