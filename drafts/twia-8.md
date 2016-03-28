extends: post.tpl

title: These Weeks in Amethyst 8
date: 27 March 2016 %HH:%MM:%SS -0500
---

> News from Mar 13, 2016 – Mar 27, 2016

Hello and welcome to the eighth issue of *This Week in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every week (or two). If you have any suggestions or ideas, feel free to voice
them [on GitHub][gh] or [the Gitter chat][gc].

[gh]: https://github.com/amethyst/website
[gc]: https://gitter.im/orgs/amethyst/rooms

Seven pull requests, [four in the engine][ep] and [three in the tools][tp],
landed over these weeks.

[ep]: https://github.com/amethyst/amethyst/pulls?q=is:pr+closed:2016-03-13..2016-03-27
[tp]: https://github.com/amethyst/tools/pulls?q=is:pr+closed:2016-03-13..2016-03-27

## Announcements

The entity-component-system is still undergoing churn under
[engine issue #10][e10] and on the ["engine" chat room][ec]. To keep our
thoughts straight, @[kvark][kv] put together [an excellent Gist][gi]
summarizing our ideas so far. Check it out!

[e10]: https://github.com/amethyst/amethyst/issues/10
[ec]: https://gitter.im/amethyst/engine
[kv]: https://github.com/kvark
[gi]: https://gist.github.com/kvark/168b132818aa6f6ef4db

## What's cooking on master?

### Notable additions

* As you can tell, we have an official website! It is hosted on
  [GitHub Pages][gp] and made with [Cobalt][co], a static website generator
  similar to Jekyll written in Rust. Future *This Week in Amethyst* posts will
  be written collaboratively with public pull requests, much like *This Week in
  Rust* already does. Thanks to @[Aceeri][ac] and @[LucioFranco][lf] for the
  excellent effort!
* [Amethyst is now an organization on GitHub!][e27] All the Amethyst
  repositories have been transferred to this new organization, and
  [the wiki][wi] is now completely open for collaborators to edit.
* [The Gitter chat has been split into multiple rooms][gc] to help keep
  conversations organized and reduce overall noise.

[gp]: https://pages.github.com/
[co]: https://github.com/cobalt-org/cobalt.rs
[ac]: https://github.com/Aceeri
[lf]: https://github.com/LucioFranco

[e27]: https://github.com/amethyst/amethyst/issues/27
[wi]: https://github.com/amethyst/amethyst/wiki

### Breaking changes

* Because of the repository restructuring on GitHub, some links may be broken.
  We will be fixing old links, especially on old *TWIA* articles, to ensure
  continuity. If you come across other broken links, please let us know on the
  [amethyst/website][wg] room on Gitter and we'll go fix it!
* [The old WordPress blog][ob] is being discontinued in favor of this website.
  We will keep it up for the forseeable future to keep old links intact, but it
  will no longer be updated. Please update your bookmarks and [RSS feeds][rf]!

[wg]: https://gitter.im/amethyst/website

[ob]: https://blog.amethyst.rs/
[rf]: https://www.amethyst.rs/rss.xml

## New contributors

No new people have joined this week!

## New issues

* Engine
  * [Relicense under dual-license Apache2 and MIT (issue #28)][e28]
  * [RFC: Config.yml specification][e29]
  * [Add RFC tag type to CONTRIBUTING.md (issue #33)][e33]
  * [RFC: Extensions system "Shards" (issue #34)][e34]
  * [Keeping change log up to date (issue #36)][e36]
* Tools
  * [Implement deploy subcommand (issue #22)][t22]
  * [Determine if project is amethyst or not (issue #26)][t26]

[e28]: https://github.com/amethyst/amethyst/issues/28
[e29]: https://github.com/amethyst/amethyst/issues/29
[e33]: https://github.com/amethyst/amethyst/issues/33
[e34]: https://github.com/amethyst/amethyst/issues/34
[e36]: https://github.com/amethyst/amethyst/issues/36

[t22]: https://github.com/amethyst/tools/issues/22
[t26]: https://github.com/amethyst/tools/issues/26
