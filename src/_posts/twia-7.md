extends: default.liquid

title: These Weeks in Amethyst 7
date: 13 March 2016 16:23:00 -0500
---

> News from Feb 22, 2016 – Mar 13, 2016

Hello and welcome to the seventh issue of *This Week in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every week (or two). If you have any suggestions or ideas, feel free to call me
out on [Gitter][gc].

[gc]: https://gitter.im/ebkalderon/amethyst

No new pull requests landed this week.

## What's cooking on master?

### Notable additions

* Versions 0.3.0 and 0.4.0 of `amethyst_tools` have been rolled out! These
  releases add a new feature and fix several annoying bugs.
  * The `amethyst` command-line tool now supports the `--release` flag in the
    same manner as Cargo ([#19][t19]). Thanks for the pull request,
    [@LucioFranco][lf]!
  * The package was re-published to work with the latest version of Cargo
    ([#17][t17]).
  * Creating a new game project no longer reports "bad file descriptor" on
    affected systems ([#18][t18]). Thanks again to [@LucioFranco][lf]!
  * Cargo's exit status is now reported back to the shell rather than dropped.
    This resolves certain issues with our integration tests reporting certain
    faulty tests as successful ([#13][t13]). This bugfix was made by
    [@White-Oak][wo] back in [issue 5 of *TWIA*][i5], but was delayed due to
    testing.
* The ECS design and implementation has been undergoing heavy churn lately. Feel
  free to drop in and contribute on our [Gitter][gc] channel.
  * On the ecs branch, both `Simulation` and `SimBuilder` were prototyped (see
    the [wiki page][ed] for the design proposal).
    [`Processor` error handling got a little Rustier][e25], using `Result`
    instead of `Option`.
  * [@Oflor][of] has been working on his own external multi-threaded ECS library
    called [Zircon][zi] that aims to easily integrate with Amethyst. Check it
    out!
* [The release guidelines have been codified in the wiki.][rg] Though we already
  follow [Semantic Versioning][sv], there are certain cases not covered by the
  standard that needed to be defined explicitly (how to treat major/minor
  changes in the tools vs. in the engine, when to increment meta-package version
  numbers, etc). This should enforce consistency and keep breakage to a minimum,
  which will be especially important after 1.0.
* Along with this, the project may also adopt a more uniform Git branching
  workflow, possibly [Git Flow][gf] by Vincent Driessen (suggestion by
  [@LucioFranco][lf]). Stale branches and merge conflicts need to be kept at
  bay, and this looks like an effective way to keep our repositories clean and
  iterate more quickly.

[t19]: https://github.com/ebkalderon/amethyst_tools/issues/19
[lf]: https://github.com/LucioFranco

[t17]: https://github.com/ebkalderon/amethyst_tools/issues/17

[t18]: https://github.com/ebkalderon/amethyst_tools/issues/18

[t13]: https://github.com/ebkalderon/amethyst_tools/issues/13
[i5]: /_posts/twia-5.html

[ed]: https://github.com/ebkalderon/amethyst/wiki/ECS-Design
[e25]: https://github.com/ebkalderon/amethyst/pull/25

[of]: https://github.com/Oflor
[zi]: https://github.com/Oflor/zircon

[rg]: https://github.com/ebkalderon/amethyst/wiki/Releases
[sv]: http://semver.org/

[gf]: http://nvie.com/posts/a-successful-git-branching-model/

## New issues

* Engine
  * [Migrating to a GitHub organization (issue #27)][e27]
* Tools
  * [Issue using cargo to install (issue #17)][t17]
  * [Add support for `--release` flag (issue #19)][t19]

[e27]: https://github.com/ebkalderon/amethyst/issues/27

## New contributors

* [LucioFranco][lf]

## Other announcements

These past few weeks, I have been struggling to keep up with both my university
studies and work, hence this unorthodox double-length issue of *TWIA*. I
apologize for the lack of public activity. Thankfully, my daily workload is
starting to decrease, so my development pace is picking up!

Some meta-news: we may be getting a real website soon! I'm in the process of
rewriting past *TWIA* posts as Markdown files so they can be hosted on the open
on GitHub, much like [*This Week in Rust*][tr]. I have purchased `amethyst.rs`
to be our official domain. So far, the main page points to nothing.
[@LucioFranco][lf] (this guy has been really helpful lately!) put together a
preliminary [pull request][e26] where we can get this working. We're running
into some issues with [Cobalt.rs][co], but we hope to resolve them soon.

[tr]: http://this-week-in-rust.org/
[e26]: https://github.com/ebkalderon/amethyst/pull/26
[co]: https://github.com/cobalt-org/cobalt.rs
