extends: post.liquid

title: This Week in Amethyst 9
date: 04 April 2016 01:51:00 -0500
---

> News from Mar 27, 2016 – Apr 03, 2016

Hello and welcome to the ninth issue of *This Week in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every week. If you have any suggestions or ideas, feel free to voice them
[on GitHub][gh] or [the Gitter chat][gc].

[gh]: https://github.com/amethyst/website
[gc]: https://gitter.im/orgs/amethyst/rooms

Nine pull requests, [four in the engine][ep] and [five in the tools][tp], landed
this week.

[ep]: https://github.com/amethyst/amethyst/pulls?q=is:pr+closed:2016-03-27..2016-04-03
[tp]: https://github.com/amethyst/tools/pulls?q=is:pr+closed:2016-03-27..2016-04-03

## Announcements

[Lukas Schmierer][ls] is working on a set of performance benchmarks for popular
entity-component-system (ECS) libraries in Rust. See the [ecs_bench][eb] repo
for more details.

[ls]: https://github.com/lschmierer
[eb]: https://github.com/lschmierer/ecs_bench

[Colin Sherratt][cs] has started prototyping a simple forward renderer that
uses [GFX][gf] at its core. You can follow his progress on the `renderer` branch
of [csherrat/amethyst][re].

[cs]: https://github.com/csherratt
[gf]: https://github.com/gfx-rs/gfx
[re]: https://github.com/csherratt/amethyst/tree/renderer/src/renderer

[Oliver Goding][og] and [Eyal Kalderon][ek] and have started working on resource
and configuration management within the engine. Check out the `resources`
branch on [ebkalderon/amethyst][ea] for the changes.

[og]: https://github.com/ogoding
[ek]: https://github.com/ebkalderon
[ea]: https://github.com/ebkalderon/amethyst/tree/resources/src/engine/src

## What's cooking on master?

### Notable additions

* [Version 0.3.0 of Amethyst was released!][er] The renderer and ECS branches
  were merged into the mainline, and [amethyst_ecs][ae] was finally published
  to Crates.io. The ECS library's API is still unstable (see issue [#10][e10]
  for the current status), but it's getting there. For a more mature
  alternative, please check out @[Oflor][of]'s [Zircon][zi] library.
* [The build tool gained the `deploy` subcommand.][de] This builds your project
  in release mode, runs all your unit and integration tests, compresses your
  game assets, and outputs everything to a directory called `deploy`.
* The build tool now also is capable of
  [checking for malformed game projects][mg] and also
  [tweaking Cargo features][cf] in preparation for the proposed "shards"
  extension system (issue [#34][e34]).

[er]: https://github.com/amethyst/amethyst/releases/tag/v0.3
[ae]: https://crates.io/crates/amethyst_ecs
[e10]: https://github.com/amethyst/amethyst/issues/10
[of]: https://github.com/Oflor
[zi]: https://github.com/Oflor/zircon

[de]: https://github.com/amethyst/tools/pull/23

[mg]: https://github.com/amethyst/tools/pull/25
[cf]: https://github.com/amethyst/tools/pull/28
[e34]: https://github.com/amethyst/issues/34

## New contributors

No new people have joined this week!

## New issues

* Engine
  * [Crate structure question (issue #42)][e42]
  * [Feature: Hot-Reloading (issue #43)][e43]
* Tools
  * [Print errors to stderr (issue #30)][t30]

[e42]: https://github.com/amethyst/amethyst/issues/42
[e43]: https://github.com/amethyst/amethyst/issues/43

[t30]: https://github.com/amethyst/tools/issues/30
