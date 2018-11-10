+++
title = "This week in Amethyst 14"
description = "What happened this week: more docs, less boilerplate, better sockets"
date = 2018-11-11
[extra]
author = "torkleyy"
author_link = "https://github.com/torkleyy"
+++

Hello and welcome to the 14th issue of _This Week in Amethyst_, a blog bringing to
you the latest changes regarding Amethyst, a data-driven game engine written in
Rust.

Content of this issue:

* recent changes
* current work
* interesting discussions
* call for participation

## Recent changes

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

[pho]: https://github.com/photex

### Font loading twaks

Thank you [jjedelsky][jje] and [DoumanAsh][dou] for making font loading better.
We can now

* fall back to the default system font and
* load default font from a path (no need to package it anymore)

Check out the PRs [here][prf] and [here][prg].

[dou]: https://github.com/DoumanAsh
[jje]: https://github.com/jjedelsky
[prf]: https://github.com/amethyst/amethyst/pull/1104
[prg]: https://github.com/amethyst/amethyst/pull/1108

## What's being worked on currently?

The fifth Pong tutorial chapter is very close to being merged. Credit goes
to [Leorii][leo] for the amazing PR! If you want to, you can already check
out [the PR][prb] and add some comments in case you notice anything.

[leo]: https://github.com/Leorii
[prb]: https://github.com/amethyst/amethyst/pull/1085

## Interesting discussions

Although not exactly an Amethyst discussion, there's a thread on
internals.rust-lang.org that discusses a working group for Rust game
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

Here are seven issues for you to pick from:

TODO

Please let us know that you're working on an issue using a short comment,
that way we can avoid duplicate work. Contributing to the discussion is also
appreciated!

Thank you for helping push the project forward!

--- TODO links ---

[is0]: https://github.com/amethyst/laminar/issues/80
[is1]: https://github.com/amethyst/laminar/issues/70
[is2]: https://github.com/amethyst/amethyst/issues/951
[is3]: https://github.com/amethyst/amethyst/issues/1091
[is4]: https://github.com/amethyst/amethyst/issues/1044
[is5]: https://github.com/slide-rs/specs/issues/505
[is6]: https://github.com/amethyst/amethyst/issues/1019

--- TODO links ---

