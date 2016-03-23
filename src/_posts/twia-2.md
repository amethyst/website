extends: post.tpl

title: This Week in Amethyst 2
date: 25 January 2016 20:00:00 -0500
---

> News from Jan 18, 2016 – Jan 25, 2016

Hello and welcome to the second issue of *This Week in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every week. If you have any suggestions or ideas, feel free to call me out on
[Gitter][gc].

[gc]: https://gitter.im/ebkalderon/amethyst

[Three pull requests][ep] landed this week.

[ep]: https://github.com/ebkalderon/amethyst/pulls?q=is:pr+closed:2016-01-18..2016-01-25

## What's cooking on master?

### Notable additions

* [Amethyst now builds correctly on stable and beta Rust release channels!][e3]
  However, this might not remain for long, as the unstable `std::boxed::FnBox`
  is going to be incorporated soon. For those on stable Rust, get it while you
  can!

[e3]: https://github.com/ebkalderon/amethyst/issues/3#issuecomment-173722266

* [With that in mind, issue #11 has been resolved.][e11]. Further emphasis on
  Amethyst's reliance on nightly Rust features is put in the Amethyst book's
  "Hello World" tutorial. Thanks for the pull request, [@cooperra][co]!

[e11]: https://github.com/ebkalderon/amethyst/issues/11
[co]: https://github.com/cooperra

* As part of [issue #13][e13], the engine has been split into multiple
  sub-crates: `amethyst_engine` and `amethyst_renderer`.

[e13]: https://github.com/ebkalderon/amethyst/issues/13

* [The state machine gained some unit tests!][st] Thanks for the pull request,
  [@Oflor][of]!

[st]: https://github.com/ebkalderon/amethyst/blob/master/tests/state.rs
[of]: https://github.com/Oflor

* [Unit tests have been moved into the `tests` folder][ut], which isn't quite
  idiomatic practice but is a good enough solution for now. Thanks again to
  [@Oflor][of]!

[ut]: https://github.com/ebkalderon/amethyst/tree/master/tests

## New issues

* [Implement thread-safe ECS (issue #10)][e10]
* [Reorganize project infrastructure (issue #13)][e13]
* [Use GFX for rendering (issue #16)][e16]

[e10]: https://github.com/ebkalderon/amethyst/issues/11
[e16]: https://github.com/ebkalderon/amethyst/issues/16

New contributors

* [Oflor][of]
* [Robbie Cooper][co]

## Other announcements

Once issue #13 is closed and the unit test matter is resolved, expect the first
official release of the "Explosive Cleric" series, Amethyst 0.2.0!
