+++
title = "This Week in Amethyst 5"
description = "Fifth issue of This Week in Amethyst."
date = 2016-02-15
aliases = ["/2016/02/15/twia-5.html"]
+++
> News from Feb 08, 2016 – Feb 15, 2016

Hello and welcome to the fourth issue of *This Week in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every week. If you have any suggestions or ideas, feel free to call me out on
[Gitter][gc].

[gc]: https://gitter.im/amethyst/general

Seven pull requests, [two in the engine][ep] and [five in the tools][tp] landed
this week.

[ep]: http://github.com/amethyst/amethyst/pulls?q=is:pr+closed:2016-02-08..2016-02-15
[tp]: http://github.com/amethyst/amethyst_tools/pulls?q=is:pr+closed:2016-02-08..2016-02-15

## What's cooking on master?

### Notable additions

* [Plenty of work has landed on the ecs branch this week!][ec] The revamped
  component storage and retrieval code, [proposed last week][e21] by
  [@Oflor][of], has finally landed. [@lschmierer][ls] also wrote a set of
  benchmarks that will help us identify performance bottlenecks as we continue
  to refine our designs.

[ec]: https://github.com/amethyst/amethyst/tree/ecs/src/ecs
[e21]: https://github.com/amethyst/amethyst/pull/21
[of]: https://github.com/Oflor
[ls]: https://github.com/lschmierer

* [Version 0.2.4 of `amethyst_tools` has been released!][at] Lots of
  bug-stomping and code cleanup in the latest version of the command-line build
  tool, largely thanks to [@White-Oak][wo]. This release fixes tool-side issues
  [#7][t7], [#8][t8], [#9][t9], and [#10][t10].

[at]: https://github.com/amethyst/amethyst_tools/commit/629baed5a0f522a504a58f3fda5dafb103ea2a4c
[wo]: https://github.com/White-Oak
[t7]: https://github.com/amethyst/amethyst_tools/issues/7
[t8]: https://github.com/amethyst/amethyst_tools/issues/8
[t9]: https://github.com/amethyst/amethyst_tools/issues/9
[t10]: https://github.com/amethyst/amethyst_tools/issues/10

* The build tool [now returns a non-zero exit code if Cargo errors out][t15],
  and the [`tests.sh` script now halts properly][t14] when tests fail, fixing
  tools issue [#13]. Thanks again, [@White-Oak][wo]!

[t15]: https://github.com/amethyst/amethyst_tools/pull/15
[t14]: https://github.com/amethyst/amethyst_tools/pull/14
[t13]: https://github.com/amethyst/amethyst_tools/issues/13

## New issues

* Engine
  * [Composable Shaders with a similar architecture to ClojureScript's Gamma (issue #22)][e22]
  * [Improve API documentation (issue #23)][e23]
* Tools
  * [Cargo stderr only prints after stdout (issue #7)][t7]
  * [`amethyst new` doesn't put specified name in Cargo.toml (issue #8)][t8]
  * [`amethyst new` doesn't put authors in Cargo.toml (issue #9)][t9]
  * [`amethyst new` doesn't create `.gitignore` file (issue #10)][t10]
  * [Expose Cargo exit status if non-zero (issue #13)][t13]

[e22]: https://github.com/amethyst/amethyst/issues/22
[e23]: https://github.com/amethyst/amethyst/issues/23

## New contributors

* [White-Oak][wo]

## Other announcements

More activity on the [entity-component-system][em] is happening on
[the Gitter chat][gc]. Please leave your input there or on
[engine issue #10][e10].

[em]: https://www.amethyst.rs/book/master/glossary.html#entity-component-system-ecs-model
[e10]: https://github.com/amethyst/amethyst/issues/10

Thanks for the contributions this week, everyone. Keep up the great work!