+++
title = "This week in Amethyst 16"
description = "Installing update..."
date = 2019-05-02
[extra]
author = "fletcher"
author_link = "https://github.com/fhaynes"
+++

Hi there! It's been awhile since our last TWIA-style update where we summarize what we've been doing and other interesting bits of news, so let's fix that!

Content of this issue:

* [0.11 News](#0.11-news)
* [Current work](#current-work)
* [Roadmap](#roadmap)
* [Workflow Changes](#workflow-changes)

## 0.11 News

We are wrapping up the work going into 0.11. It has some major changes, and also marks the beginning of a more structured planning and release process, which you can read about in Workflow Changes below. There's one piece of 0.11 I want to briefly mention, though.

### Vulkan and Rendy

You've probably heard "Rendy is coming!" for a year or more now. Several months ago, we realized we needed to finish it or scrap it, because the scope creep was impacting all other development. We opted to reduce the scope of the initial version to feature parity with the existing renderer and try to finish it.

I'm happy to say that we've achieved that and are wrapping up documentation and a few other small pieces, and then we'll release 0.11. This was made possible by the ridiculously skilled rendering team:

- Frizi
- Viral
- Fusha
- Jaynus

We'll provide more details in the release announcement for 0.11, but a brief summary is that the new renderer is built on top of the [Rendy Project](https://github.com/amethyst/rendy) by [Viral](https://github.com/omni-viral), which in turn is built on [gfx-rs](https://github.com/gfx-rs/gfx). This allows us to implement many spiffy new features in the future that leverage the capabilities of Vulkan, Metal, and DirectX 12.

## Current Work

### WASM

On May 1st, work began on making Amethyst run on WASM. This work is being funded by our [MOSS Grant](https://amethyst.rs/blog/moss-grant-announce/) from Mozilla Foundation, and will continue throughout the summer. A major part of this will be getting the ECS system we use, [Specs](https://github.com/slide-rs/specs), to work in WASM as well as contributing to [gfx-rs](https://github.com/gfx-rs/gfx).

### Evolution Island and More

Significant progress has been made on a showcase game, [Evolution Island](https://github.com/amethyst/evoli), and the Network Team has started work on a small demo FPS game that will illustrate the use of [laminar](https://github.com/amethyst/laminar).

Developing games ourselves using our own engine is reflective of a more fundamental change in how we work; we're going to actually _use_ our product and let those experiences drive our roadmap (also known as dogfooding).

## Roadmap

We have one! Sort of! You can see it here: [Roadmap](https://amethyst.rs/roadmap). This is rough and subject to change, and probably always will be. One piece of feedback we've received from many users is that it is hard to follow what we are doing and where we are going. Publishing a roadmap and keeping it updated is part of our efforts to fix that.

## Workflow Changes

Any project as complex and ambitious as Amethyst will have growing pains. Throw in that we are _highly_ diverse geographically and are largely volunteers, and normal obstacles can become very difficult. We're adopting a set of principles that we hope will help us overcome them and be a sustainable, high-quality project.

### Principles

1. No giant monolithic systems that take forever to code. Projects will be decomposed into achievable chunks, designed, and planned so that they can be worked on by more than one person. This is critical in a project with a development team that has a variable amount availability.
2. Quality as a deliverable. This means we're going to opt for high-quality testing, stability, and regression-free releases over shiny features and development speed. A project such as ours cannot afford to accumulate much tech debt. It results in a bad experience for our users and burning out on our team. 
3. Dogfooding. We're going to use Amethyst to make small games. Aside from helping us catch bugs and better informing the roadmap, this will give us more empathy with our users. If _we_ can't make something work in Amethyst, or if we hate some part of it, odds are that our users will feel similarly. This also has the nice result of producing examples and documentation.

## That's All

Please feel free to come visit us at our [Forums](https://community.amethyst.rs) or on our [Discord](https://discord.gg/amethyst)! We love to talk!

