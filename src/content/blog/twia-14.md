+++
title = "This week in Amethyst 14"
description = "What happened this week: asset loading, skyboxes, fonts, working groups"
date = 2018-11-11
[extra]
author = "torkleyy"
author_link = "https://github.com/torkleyy"
+++

Hello and welcome to the 14th issue of _This Week in Amethyst_, a blog bringing to
you the latest changes regarding Amethyst, a data-driven game engine written in
Rust.

Content of this issue:

* Recent changes
* Current work
* Interesting discussions
* Call for participation

## Recent changes

### Nalgebra migration

[Discussions within Amethyst][nmig] about a migration to nalgebra began in September due to 
calls by [tomaka][tom] for the Rust game development ecosystem to standardize on 
a single library for math and linear algebra in his post ["My gamedever wishlist for Rust"][mgw].

Eminent contributor [Ellie][ellie] completed the migration of Amethyst's 
internal math library from cgmath to nalgebra in [this PR][prn], marking another
win for the Rust game development ecosystem and showing Amethyst's commitment to
the larger community. Thank you Ellie!

With the migration completed, a number of public APIs will change in Amethyst's next release along 
with updates to examples and documentation. Expect more details on the API changes in a future post.

[ellie]: https://github.com/magnonellie
[tom]: https://github.com/tomaka
[prn]: https://github.com/amethyst/amethyst/pull/1066
[nmig]: https://github.com/amethyst/amethyst/issues/942
[mgw]: https://users.rust-lang.org/t/my-gamedever-wishlist-for-rust/2859

### Asset loading helper

Thanks to [Rhuagh][rhu], asset loading is now a bit easier ([PR][pra]).

This is how it looks outside of a system:

```rust
let mesh = world.exec(|loader: AssetLoaderSystemData<Mesh>| {
    loader.load_from_data(
        Shape::Sphere(32, 32).generate::<Vec<PosNormTangTex>>(None),
        (),
    )
});
```

And this is an example inside a system:

```rust
impl<'a> System<'a> for MySys {
    type SystemData = (
        // ..
        AssetLoaderSystemData<'a, Texture>,
        // ..
    );
    
    fn run(&mut self, ..) {
        let texture = loader.load("mytexture.png", PngFormat,
            TextureMetadata::srgb(), ());
    }
}
```
[rhu]: https://github.com/Rhuagh
[pra]: https://github.com/amethyst/amethyst/pull/1090

### Skybox Pass

We finally got a skybox pass! Thank you, [photex][pho]!
It's only a gradient skybox for now, but it looks nice already.
This is how you can try it out:

Instead of `.with_basic_renderer`, use the `RenderBundle` and build
the pipeline yourself. Now, you just need to add

```rust
.with_pass(DrawSkybox::new())
```

to a pipeline stage and you get a skybox.
You can tweak it using the `SkyboxColor` resource.

Here's a screenshot of the game [photex][pho] and [brendanzab][bre] are working
on (using the new gradient skybox):

![Game screenshot][gsc]

[pho]: https://github.com/photex
[bre]: https://github.com/brendanzab
[gsc]: https://user-images.githubusercontent.com/23152057/48365134-559d4880-e6aa-11e8-9b7a-d60b40b4f895.png

### Font loading tweaks

Thank you [jjedelsky][jje] and [DoumanAsh][dou] for making font loading better:

We can now

* fall back to the default system font and
* load default font from a path (no need to package it anymore)

Check out the PRs [here][prf] and [here][prg].

[dou]: https://github.com/DoumanAsh
[jje]: https://github.com/jjedelsky
[prf]: https://github.com/amethyst/amethyst/pull/1104
[prg]: https://github.com/amethyst/amethyst/pull/1108

### Default logger more configurable

Amethyst uses the logging library [fern][frn] which has really nice builder-based configuration support.
A [recent PR][lgc] enables users of Amethyst to configure the default logger with options like
`level_for()` before starting the logger. Check out the example:

```rust
let logger = amethyst::Logger::from_config(amethyst::LoggerConfig::default());
logger.get_dispatch()
    .level_for("gfx_device_gl", log::LevelFilter::Warn)
    .level_for("gfx_glyph", log::LevelFilter::Error)
    .apply();
```

Thank you for helping us keep our logs clean [qqwa][qqwa]!

[frn]: https://github.com/daboross/fern
[qqwa]: https://github.com/qqwa
[lgc]: https://github.com/amethyst/amethyst/pull/1107

## What's being worked on currently?

The fifth Pong tutorial chapter is very close to being merged. Credit goes
to [Leorii][leo] for the amazing PR! If you want to, you can already check
out [the PR][prb] and add some comments in case you notice anything.

[leo]: https://github.com/Leorii
[prb]: https://github.com/amethyst/amethyst/pull/1085

There are so many other open PRs, if you're interested, you can check them out
yourself [here][prs].

[prs]: https://github.com/amethyst/amethyst/pulls

## Interesting discussions

Although not exactly an Amethyst discussion, there's a thread on
[internals.rust-lang.org][wgt] that discusses a working group for Rust game
development.

More features, documentation and stability would be a huge help to Amethyst,
so we would greatly appreciate such a working group.
Make sure to [bring in your input][wgt]!

[wgt]: https://internals.rust-lang.org/t/a-working-group-for-rust-game-development/8240

## Call for participation

We love contributions from the community, so if you see something you'd like
to work on, don't hesitate! We are going to help you and point you into the
right direction if something doesn't work out at first.

We have tasks with different difficulty. Make sure to choose easier ones at
first, because hard issues can become quite frustrating, especially if you
haven't worked on Amethyst before.

Here are four issues for you to pick from:

* [easy | **amethyst/laminar**] [Polish crates (more config options, docs, code coverage)][is1]
* [moderate | **amethyst/laminar**] [Help writing the book documenting the protocol][is2]
* [moderate | **amethyst/amethyst**] [Make it easier to display an image][is3]
* [hard | **amethyst/amethyst**] [Investigate crash related to multisampling][is4]

Please let us know that you're working on an issue using a short comment,
that way we can avoid duplicate work. Contributing to the discussion is also
appreciated!

Thank you for helping push the project forward!

[is1]: https://github.com/amethyst/laminar/issues/45
[is2]: https://github.com/amethyst/laminar/issues/33
[is3]: https://github.com/amethyst/amethyst/issues/1086
[is4]: https://github.com/amethyst/amethyst/issues/135

