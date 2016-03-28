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

28 pull requests, [four in the engine][ep], [three in the tools][tp], and
[twenty one in the website][wp], landed over these weeks.

[ep]: https://github.com/amethyst/amethyst/pulls?q=is:pr+closed:2016-03-13..2016-03-27
[tp]: https://github.com/amethyst/tools/pulls?q=is:pr+closed:2016-03-13..2016-03-27
[wp]: https://github.com/amethyst/website/pulls?q=is:pr+closed:2016-03-13..2016-03-27

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
  conversations organized and reduce overall noise. Looks much nicer!

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

[wg]: https://gitter.im/amethyst/website

* [The old WordPress blog][ob] is being discontinued in favor of this website.
  We will keep it up for the forseeable future to keep old links intact, but it
  will no longer be updated. Please update your bookmarks and [RSS feeds][rf]!

[ob]: https://blog.amethyst.rs/
[rf]: https://www.amethyst.rs/rss.xml

## New issues

* Engine
  * [Relicense under dual-license Apache2 and MIT (issue #28)][e28]
  * [RFC: Config.yml specification][e29]
  * [Add RFC tag type to CONTRIBUTING.md (issue #33)][e33]
* Tools
  * [Implement deploy subcommand (issue #22)][t22]
  * [Determine if project is amethyst or not (issue #26)][t26]
* Website
  * [Rewrite all TWIA posts in Markdown (issue #5)][w5]
  * [Gitter chat box obscures text on narrow displays (issue #8)][w8]
  * [Move mdbooks install to script (issue #11)][w11]
  * [Use CloudFlare (issue #12)][w12]
  * [Github menu link disappears on iPhone 5 (issue #13)][w13]
  * [TWIA post order not correct (issue #14)][w14]
  * [Show hamburger menu on narrow displays (issue #20)][w20]
  * [Commit 46d6de3 breaks CSS][w22]
  * [Display publication date next to post in "What's New?" (issue #23)][w23]
  * [Expose RSS feed and test that it works (issue #24)][w24]
  * [Update Gitter Chat on website (issue #28)][w28]
  * [Overflowing issue on mobile (issue #35)][w35]

[e28]: https://github.com/amethyst/amethyst/issues/28
[e29]: https://github.com/amethyst/amethyst/issues/29
[e33]: https://github.com/amethyst/amethyst/issues/33

[t22]: https://github.com/amethyst/tools/issues/22
[t26]: https://github.com/amethyst/tools/issues/26

[w5]: https://github.com/amethyst/website/issues/5
[w8]: https://github.com/amethyst/website/issues/8
[w11]: https://github.com/amethyst/website/issues/11
[w12]: https://github.com/amethyst/website/issues/12
[w13]: https://github.com/amethyst/website/issues/13
[w14]: https://github.com/amethyst/website/issues/14
[w20]: https://github.com/amethyst/website/issues/20
[w22]: https://github.com/amethyst/website/issues/22
[w23]: https://github.com/amethyst/website/issues/23
[w24]: https://github.com/amethyst/website/issues/24
[w28]: https://github.com/amethyst/website/issues/28
[w35]: https://github.com/amethyst/website/issues/35

## New contributors

No new people have joined this week!

## Other announcements

`List miscellaneous announcements or call attention to ongoing tasks here.`
