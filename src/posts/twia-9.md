extends: default.liquid

title: These Months in Amethyst 9
date: 11 September 2016 10:00:00 -0600
---

> News from Mar 27, 2016 – Sep 11, 2016

Hello and welcome to the ninth issue of *This Week in Amethyst* or actually *These Months in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every week(or months). If you have any suggestions or ideas, feel free to voice them
[on GitHub][gh] or [the Gitter chat][gc].



[lf]: (https://github.com/LucioFranco)
[eb]: (https://github.com/ebkalderon)

[gh]: https://github.com/amethyst/website
[gc]: https://gitter.im/orgs/amethyst/rooms

Forty pull requests, [Forty in the engine][ep] and [Zero in the tools][tp],
landed these past few months.

[ep]: https://github.com/amethyst/amethyst/pulls?q=is:pr+closed:2016-04-27..2016-09-11
[tp]: https://github.com/amethyst/tools/pulls?q=is:pr+closed:2016-04-27..2016-00-11

## Announcements

We have halted the *This Week in Amethyst* due to some slow progress and not having much to show. We will move to a more monthly basis now as more pieces are coming into place.

With that out of the way. What have we been up too in the past few months? Well, a lot. The most notable thing is that we finally have a few working examples including a version of [pong](https://github.com/amethyst/amethyst/tree/develop/examples/04_pong).



## What's cooking on develop?

### Notable additions

* [Specs](specs) and [gfx-rs](gfx) have both been integrated into Amethyst.

* [GFX based renerer] has been implemented! Thanks to [@csherratt](cs)!

* The base for [YAML Config](p61) loading has been done. Thanks to [@Aceeri](ac).

* More work has gone into the glue for all the components in the [amethyst_context crate](p63) thanks [@nchashch](nc).

* The [default renderer processor](p85) has been merged. This includes the new pong example. Thanks again to [@nchashch](nc) brilliant work!

[p61]: (https://github.com/amethyst/amethyst/pull/61)
[p63]: (https://github.com/amethyst/amethyst/pull/63)
[p85]: (https://github.com/amethyst/amethyst/pull/85)

[nc]: (https://github.com/nchashch)
[ac]: (https://github.com/Aceeri)
[cs]: (https://github.com/csherratt)

### Breaking changes

There are no breaking changes!

## New contributors

* [nchashch](nc)
* [bjadamson](https://github.com/bjadamson)
* [Emilgardis](https://github.com/Emilgardis)

## Call for Participation
* [Easy] [Add more content to the book](i50)
* [Moderate] [Transform Processor](https://github.com/amethyst/amethyst/issues/53)
* [Moderate] [Audio Processor](i60)

[i60]: (https://github.com/amethyst/amethyst/issues/60)
[i50]: (https://github.com/amethyst/amethyst/issues/50)

This edition was edited and written by [@LucioFranco](lf) and [@ebkalderon](eb).