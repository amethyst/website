+++
title = "Amethyst 0.10.0 has been released!"
description = "The Amethyst team is happy to announce Amethyst 0.10.0. This release includes a migration to nalgebra, an automated test framework, and many other improvements."
date = 2018-12-08
+++

The Amethyst team is happy to announce a new version of Amethyst, 0.10.0.
Amethyst is a data-driven and data-oriented game engine aiming to be fast and as configurable as possible.

To pick up this release, add the following in your project's `Cargo.toml`:

```toml
amethyst = "0.10.0"
```

## What's in 0.10.0

Amethyst 0.10.0 comes packed with features, ergonomics, and stability improvements.

### nalgebra

Previously, Amethyst used the `cgmath` library for its math types.
In this release, Amethyst has moved to the [nalgebra] library, as the Rust community has
recently rallied behind using it as the [common library for game development][nalgebra-rally].

[nalgebra]: https://www.nalgebra.org/
[nalgebra-rally]: https://users.rust-lang.org/t/cgmath-looking-for-new-maintainers/20406

As part of this change, we no longer export `amethyst::core::cgmath`, instead you should be using
`amethyst::core::nalgebra` like this:

```rust
use amethyst::core::nalgebra::{Vector2, Vector3, Matrix4};
```

This change paves the way towards using the various [rustsim] libraries.
This is a collection of high-quality libraries, developed and maintained by the broader Rust
community to perform simulations.

Going forward we will be working on integrating these libraries.
In the meantime, [`amethyst-rhusics`] has been
updated to support `nalgebra`.

This is of course a breaking change. To help our users in this transition we've written a
[`cgmath` to `nalgebra` cheat sheet][cgmath-to-nalgebra].

[rustsim]: https://www.rustsim.org/
[`amethyst-rhusics`]: https://github.com/amethyst/amethyst-rhusics
[cgmath-to-nalgebra]: https://www.amethyst.rs/book/latest/appendices/b_migration_notes/cgmath_to_nalgebra.html

### Rust 2018

The Amethyst Foundation team has been working on making sure that the project is up to date with the latest and greatest stable Rust. Rust 1.31 came out on December 6th, and with that release came the 2018 edition of Rust. We're happy to say that with this release, Amethyst has migrated to Rust 2018. The primary change that affects Amethyst is that implicit lifetimes are no longer idiomatic; thus state data should be represented like so: `StateData<'_, GameData<'_, '_>>`. We have some changes on the way to make this more ergonomic, so keep an eye out!

###  Automated Testing Framework

One of Rust's promoted qualities is fearlessness.
To uphold this principle, we want to support complete confidence to make changes in games made with Amethyst.
The `amethyst_test` crate was built for this purpose.

This crate lets you set up an Amethyst application, execute specific logic, and run assertions
on the `World` with minimal boilerplate.
Here's an example:

```rust
pub struct MyResource(pub u32);

#[test]
fn system_increases_resource_value_by_one() -> Result<(), amethyst::Error> {
    AmethystApplication::blank()
        .with_setup(|world| world.add_resource(MyResource(0)))
        .with_system_single(ExampleSystem, "example_system", &[])
        .with_assertion(|world| {
            let my_resource = world.read_resource::<MyResource>();

            // If the system ran, the value in the `MyResource` should be 1.
            assert_eq!(1, my_resource.0);
        })
        .run()
}
```

This runs the `ExampleSystem` in a simplified Amethyst application.
Unimportant details are hidden, allowing the test to be readable and expressive.
Best of all, behavioral changes to the system are automatically tested.

For more information, please see the [Testing][testing]
section in the book and the [API documentation][api].

[testing]: https://www.amethyst.rs/book/latest/testing.html
[api]: https://www.amethyst.rs/doc/latest/doc/amethyst_test/index.html

### Other Changes

Amethyst 0.10.0 involves a significant number of changes.
We can't detail all of them here, but following are some of the more notable ones:

* Our canonical Pong tutorial tutorial has been improved and expanded.
* `SimpleState` is further simplified by using default lifetimes ([#1198]).
* The `DrawSprite` pass has been renamed to `DrawFlat2D` ([#1153]).
* Images can now be drawn without having to define a `SpriteSheet` ([#1153]).
* `amethyst_ui::get_default_font` now supports loading fonts from the filesystem ([#1108]).
* It is now easier to build simple prefabs using `#[derive(PrefabData)]` ([#1035]).
* The networking team has been working hard on laminar and it has finally been [released][laminar].
  If you are interested you can check [TWIA 13][twia-13] out where it is introduced.

For a full list of changes, see the [detailed release notes for 0.10.0][changelog].

[#1035]: https://github.com/amethyst/amethyst/pull/1035
[#1108]: https://github.com/amethyst/amethyst/pull/1108
[#1153]: https://github.com/amethyst/amethyst/pull/1153
[#1198]: https://github.com/amethyst/amethyst/pull/1198
[changelog]: https://github.com/amethyst/amethyst/blob/master/docs/CHANGELOG.md#0100---2018-12
[laminar]: https://crates.io/crates/laminar
[twia-13]: https://www.amethyst.rs/blog/twia-13

## What's Next

Following is a sneak peak of what the various teams are working on right now.

* The web team is working on improving https://amethyst.rs.
* The assets team is working on a new strategy for defining and loading assets based on
  modern best-practices.
* The rendering team is working hard on moving from our current OpenGL-based renderer, to one that
  uses [gfx-rs]. This will empower Amethyst to start making use some of the goodies that comes with
  modern graphics APIs.
* Our community team is currently improving our contribution guidelines, and are trying to drive
  and visualize our donation targets.
* The networking team is working on their roadmap. If you are interested, have questions, or you
  just want to be up to date with their work, we recommend that you check out the
  [networking forums][networking-forums].
* The editor team is building editor prototypes to evaluate different application frameworks.
  There is currently an [Electron prototype][electron-prototype]; [Azul] and [orbtk] are being looked at as potential alternatives.
* The UI team are chipping away at the [UI RFC][ui-rfc] and investigating [real-time text rendering][realtime-text].

[gfx-rs]: https://github.com/gfx-rs
[networking-forums]: https://community.amethyst-engine.org/c/development/networking
[electron-prototype]: https://github.com/randomPoison/amethyst-editor
[Azul]: https://azul.rs/
[orbtk]: https://github.com/redox-os/orbtk
[ui-rfc]: https://github.com/amethyst/amethyst/issues/1072
[realtime-text]: https://community.amethyst-engine.org/t/lay-of-the-land-text-rendering/164

## People we 💖

We would like to thank all our contributors who were involved in making this release possible:

* @alanpoon
* @azriel91
* @barskern
* @bgourlie
* @bwhetherington
* @CAD97
* @Canop
* @CBenoit
* @celluloce
* @clemarescx
* @CosineP
* @distransient
* @DoumanAsh
* @erlend-sh
* @Escapingbug
* @fhaynes
* @fopsdev
* @gheoan
* @halfbro
* @happenslol
* @harryfei
* @hirschenberger
* @irafunesta
* @ISibboI
* @JamesAngstrom
* @jjedelsky
* @joepie91
* @jojolepro
* @JulienBe
* @kabergstrom
* @karroffel
* @khionu
* @KuSpa
* @Leorii
* @loothood
* @LucioFranco
* @lvitol
* @magnonellie
* @minecrawler
* @moflipeje
* @mtsr
* @nikolads
* @norman784
* @omni-viral
* @photex
* @pietrovismara
* @Plasticcaz
* @PSeitz
* @qqwa
* @re-l124c41plus
* @Rhuagh
* @samschlegel
* @sinistersnare
* @Skytrias
* @Stoeoef
* @Techno-coder
* @Telzhaak
* @Temeez
* @TimonPost
* @torkleyy
* @udoprog
* @Xaeroxe
* @yaahallo
* @yjh0502
* @yukicode

As well as everyone who reviewed pull requests, opened issues, participated in the design
discussions, and requested features!

---

*The Amethyst Foundation is a pending 501(c)(3) non-profit. For details on what this means, or to make a donation, please refer to [this announcement][non-profit]. If you would like to contribute to Amethyst, feel free to [jump right in][contribute].*

[non-profit]: https://www.amethyst.rs/blog/non-profit-announce/
[contribute]: https://github.com/amethyst/amethyst
