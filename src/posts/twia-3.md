extends: default.liquid

title: This Week in Amethyst 3
date: 01 February 2016 20:00:00 -0500
---

> News from Jan 18, 2016 – Jan 25, 2016

Hello and welcome to the third issue of *This Week in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every week. If you have any suggestions or ideas, feel free to call me out on
[Gitter][gc].

Three pull requests, [two in the engine][ep] and [one in the tools][tp]
landed this week.

[ep]: http://github.com/ebkalderon/amethyst/pulls?q=is:pr+closed:2016-01-25..2016-02-01
[tp]: http://github.com/ebkalderon/amethyst_tools/pulls?q=is:pr+closed:2016-01-25..2016-02-01

## What's cooking on master?

### Notable additions

* [Version 0.2.1 of Amethyst has been successfully rolled out!][e18] Both the
  engine and the CLI tool repositories have seen some major internal
  restructuring to increase modularity, fixing [engine issue #13][e13].

[e18]: https://github.com/ebkalderon/amethyst/pull/18
[e13]: https://github.com/ebkalderon/amethyst/issues/13

* The `amethyst` crate now re-exports two sub-crates: `amethyst_engine` (the
  core game engine), and `amethyst_renderer` (the rendering system). More crates
  are forthcoming.
* [The `amethyst_cli` repository has been renamed to `amethyst_tools`.][at] This
  will host the entirety of Amethyst's future tool suite.

[at]: https://github.com/ebkalderon/amethyst_tools

* We have adopted a leaner, meaner change log format ([engine issue #17][e17],
  [tools issue #5][t5]).

[e17]: https://github.com/ebkalderon/amethyst/issues/17
[t5]: https://github.com/ebkalderon/amethyst_tools/issues/5

* [All of the renderer code has been removed][e7] and its backend will be
  rewritten over [GFX][gf]. Thanks to [@kvark][kv] of the GFX project for the
  collaboration!

[e7]: https://github.com/ebkalderon/amethyst/issues/7#issuecomment-175896493
[gf]: https://github.com/gfx-rs/gfx
[kv]: https://github.com/kvark

### Breaking changes

* Due to engine restructuring, use statements must be updated to
  `amethyst::engine`.
* [`amethyst_cli`][ac] has been discontinued. Please install
  [`amethyst_tools`][at] instead!

[ac]: https://crates.io/crates/amethyst_cli/

## New issues

* Engine
  * [Use GFX for rendering (issue #16)][e16]
  * [Finalize renderer design (issue #19)][e19]
* Tools
  * [Reorganize project infrastructure (issue #4)][t4]
  * [Adopt new change log format (issue #5)][t5]

[e16]: https://github.com/ebkalderon/amethyst/issues/16
[e19]: https://github.com/ebkalderon/amethyst/issues/19
[t4]: https://github.com/ebkalderon/amethyst_tools/issues/4

## New contributors

* [Dzimitry Malyshau (kvark)][kv]

## Other announcements

[A revamped parallel renderer design diagram][rd] has been drafted and is in
need of public feedback before any implementation can begin. Please see
[engine issue #19][e19] for details.

[rd]: https://camo.githubusercontent.com/ac83c4ffa8cef072f6027efab57a7dcd74bbe04a/687474703a2f2f65626b616c6465726f6e2e6769746875622e696f2f616d6574687973742f696d616765732f64657369676e2f72656e64657265725f312e352e706e67

More feedback is still needed on the thread-safe ECS design tracked by
[engine issue #10][e10]. Should we use existing ECS solutions, or should we
write our own? Leave your input there.

In other news, there has been a recent explosion of activity
[on the Gitter chat][gc], which is wonderful to see. Have any questions,
suggestions, or comments? Come join the conversation!
