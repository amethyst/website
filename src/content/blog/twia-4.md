+++
title = "This Week in Amethyst 4"
description = "Fourth issue of This Week in Amethyst."
date = 2016-02-08
aliases = ["/2016/02/08/twia-4.html"]
+++
> News for Feb 01, 2016 – Feb 08, 2016

Hello and welcome to the fourth issue of *This Week in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every week. If you have any suggestions or ideas, feel free to call me out on
[Gitter][gc].

[gc]: https://gitter.im/amethyst/general

[One pull request][ep] for the engine was proposed this week, but hasn't landed
yet.

[ep]: https://github.com/amethyst/amethyst/pulls?q=is:pr+created:2016-02-01..2016-02-08

## What's cooking on master?

### Notable additions

* Work on fast and efficient component storage has begun on the [ecs branch][ec]
  (thanks to [@lschmierer][ls] for the initial [`AnyVec`][av] implementation).
  [@Oflor][of] is proposing another, possibly faster approach with
  [pull request #21][e21].

[ec]: https://github.com/amethyst/amethyst/tree/ecs
[ls]: https://github.com/lschmierer
[av]: https://github.com/lschmierer/anyvec
[of]: https://github.com/Oflor
[e21]: https://github.com/amethyst/amethyst/pull/21

* [A clear definition of the entity-component-system (ECS) model][em] has been
  added to the Amethyst book's glossary.

[em]: https://www.amethyst.rs/book/master/glossary.html#entity-component-system-ecs-model

* The "Hello World" chapter's example code
  [has been updated to use the 0.2.1 API][hw].

[hw]: https://github.com/amethyst/amethyst/commit/2c9ab7f62add3880ec5159c517cc737c0eee14d5

## New issues

* Engine
  * [`Entities` struct doesn't properly recycle IDs (issue #20)][e20]

[e20]: https://github.com/amethyst/amethyst/issues/20

## New contributors

* [Lukas Schmierer (lschmierer)][ls]

## Other announcements

As the changes above suggest, we have settled on rolling our own
entity-component-system library for Amethyst, rather than using existing
solutions. This was done for reasons of efficiency and thread-safety. Join the
discussion on [engine issue #10][e10] and on [the public Gitter chat][gc].

[e10]: https://github.com/amethyst/amethyst/issues/10

The drafted [parallel renderer design diagram][rd] is still open for public
feedback. Please see [engine issue #19] if you have any suggestions or comments
before implementation begins.

[rd]: https://camo.githubusercontent.com/ac83c4ffa8cef072f6027efab57a7dcd74bbe04a/687474703a2f2f65626b616c6465726f6e2e6769746875622e696f2f616d6574687973742f696d616765732f64657369676e2f72656e64657265725f312e352e706e67
[e19]: https://github.com/amethyst/amethyst/issues/19

It's been a busy week for all of us. Thanks for the good work everyone!