+++
title = "This week in Amethyst 13"
description = "What happened this week: more docs, less boilerplate, better sockets"
date = 2018-11-04
[extra]
author = "torkleyy"
author_link = "https://github.com/torkleyy"
+++

Hello and welcome to the 13th issue of _This Week in Amethyst_, a blog bringing to
you the latest changes regarding Amethyst, a data-driven game engine written in
Rust.

Content of this issue:

* recent changes
* current work
* interesting discussions
* call for participation

## Recent changes

### New chapter for the Pong tutorial

A fourth chapter has been written for [our Pong tutorial][ptu] by
[CBenoit][cbe]. High quality documentation is very important for our project,
so thank you for your work!

[ptu]: https://www.amethyst.rs/book/master/pong-tutorial/pong-tutorial-04.html
[cbe]: https://github.com/CBenoit

There are still a few chapters missing unfortunately. If you're interested to
help, we'd be very happy about contributions, whether it's just reviewing
the work of others or writing a chapter on your own. Please contact us on
[Discord/#documentation][dis] or by commenting on [the GitHub issue][pti].
Note that there's already a PR working on chapter 5 [here][ch5], so make sure
to coordinate your work with that.

[dis]: https://discord.gg/zy4E52n
[pti]: https://github.com/amethyst/amethyst/issues/506
[ch5]: https://github.com/amethyst/amethyst/pull/1085

### More lights

Thanks to [karroffel][kar] Amethyst got support for directional lights and spot
lights in the PBM shader! See [the directional light][pdl] and the
[spot light][psl] PRs.

![Spot light screenshot][lii]

[kar]: https://github.com/karroffel
[lii]: https://user-images.githubusercontent.com/5209613/47617278-b7b05800-dac5-11e8-9a55-f523ef51a330.png
[pdl]: https://github.com/amethyst/amethyst/pull/1074
[psl]: https://github.com/amethyst/amethyst/pull/1081

### Added support for deriving prefabs

With [Rhuagh's][rhu] recent feature addition, simple prefab definitions can now
be created using a `#[derive(PrefabData)]` macro. That means, what previously
was written as:

```rust
/// `PrefabData` for full skinning support
#[derive(Clone, Default, Debug, Serialize, Deserialize)]
#[serde(default)]
pub struct SkinnablePrefab {
    /// Place `Skin` on the `Entity`
    pub skin: Option<SkinPrefab>,
    /// Place `Joint` on the `Entity`
    pub joint: Option<JointPrefab>,
    /// Place `JointTransforms` on the `Entity`
    pub joint_transforms: Option<JointTransformsPrefab>,
}

impl<'a> PrefabData<'a> for SkinnablePrefab {
    type SystemData = (
        <SkinPrefab as PrefabData<'a>>::SystemData,
        <JointPrefab as PrefabData<'a>>::SystemData,
        <JointTransformsPrefab as PrefabData<'a>>::SystemData,
    );
    type Result = ();

    fn add_to_entity(
        &self,
        entity: Entity,
        system_data: &mut Self::SystemData,
        entities: &[Entity],
    ) -> Result<(), PrefabError> {
        if let Some(ref prefab) = self.skin {
            prefab.add_to_entity(entity, &mut system_data.0, entities)?;
        }
        if let Some(ref prefab) = self.joint {
            prefab.add_to_entity(entity, &mut system_data.1, entities)?;
        }
        if let Some(ref prefab) = self.joint_transforms {
            prefab.add_to_entity(entity, &mut system_data.2, entities)?;
        }
        Ok(())
    }
}
```

...is now as easy as:

```rust
/// `PrefabData` for full skinning support
#[derive(Clone, Default, Debug, Serialize, Deserialize, PrefabData)]
#[serde(default)]
pub struct SkinnablePrefab {
    /// Place `Skin` on the `Entity`
    pub skin: Option<SkinPrefab>,
    /// Place `Joint` on the `Entity`
    pub joint: Option<JointPrefab>,
    /// Place `JointTransforms` on the `Entity`
    pub joint_transforms: Option<JointTransformsPrefab>,
}
```

[rhu]: https://github.com/Rhuagh

## What's being worked on currently?

This time it's a whole team's work we want to present here - the Networking
Team.

Amethyst didn’t have any networking until version 0.9.0 and we only have a
basic implementation right now which will be replaced.
The networking team is planning to make the new API available in the 0.10.0
release but because game networking is a complex topic that spans many components, we
have broken it down into smaller pieces.

> Note: The following assumes some knowledge about networking sockets.
  We recommend you read [the Wikipedia article][soc] about it in case you're
  not familiar with sockets.

[soc]: https://en.wikipedia.org/wiki/Network_socket

### [`laminar`](https://github.com/amethyst/laminar)

This will be our semi-reliable UDP-based protocol. We are planning to release
its first version around November 9th, 2018.

It is considered the lowest level networking crate and has the following
responsibilities:

* Choosing the ordering, reliability, and encryption for your packets. 
* Congestion avoidance measures.
* Fragmentation of packets if needed.
* Monitor connections for Connect, Disconnect and Timeout events.
* Pass events and associated information up to the `amethyst_network` crate via
  mpsc channels using the Event abstraction..

### Implementation details

Many of you may wonder why we did not use TCP. This is a complex topic, and not
one we can cover in this post. In general, the reliability and ordering
guarantees TCP provides cause severe latency spikes and other performance
degradations.

If you are interested in this topic, you can read more about that
[here](https://gafferongames.com/post/udp_vs_tcp/) or in our
[book](https://github.com/amethyst/laminar/tree/master/docs/md_book).

[Glenn Fiedler (@gafferongames)][gle] describes in a series of [articles][gar]
how game networking should be done. Our work has been to create a Rust version
of his library.

[gle]: https://github.com/gafferongames
[gar]: https://gafferongames.com/

Currently, there are already C/C++ based implementations but there is no
finished Rust implementation.
When we began implementing networking, we could not find an existing crate that
met our needs. There are crates that provide protocols built on UDP, but they
are oriented towards the needs of non-game applications. 

Rust is an excellent language for fast, reliable network programming because of
its safety and speed. In particular, the lack of garbage collection and ability
to write very low level code allows for a level of performance normally seen
only in C or C++. The work we’ve done on Laminar is available for anyone to use,
and we hope others in the gaming industry will find it useful.

[til]: https://github.com/amethyst/laminar/issues/58

### Higher-level networking ([`amethyst_network`][anw])

[anw]: https://github.com/amethyst/amethyst/tree/master/amethyst_network

This crate will be part of the Amethyst game engine and provides the API and
functionality which application developers will use to develop multiplayer
games.

Its responsibilities are

* Automatic syncing of entity state between hosts.
* Remote procedure calls.
* Ensuring integrity of game logic.
* Providing easy to use systems and components to support networking.
* Basic congestion avoidance.
* Server-Client based communication.

### Current progress: reliability strategy

You can see a tracking issue for all the progress [here][til]. Currently there
is a PR about allowing you to choose different kinds of reliabilities. In
addition to the functionality, we are including a comprehensive suite of unit-,
integration-, and scenario-tests. This will aid in preventing regressions and
bugs.

---

Thank you to the authors,

* [LucioFranco][lfr],
* [fhaynes][fha] and
* [TimonPost][tpo]

[lfr]: https://github.com/LucioFranco
[fha]: https://github.com/fhaynes
[tpo]: https://github.com/TimonPost

## Interesting discussions

Two big RFCs have been added this week. They are both very general and depend
on all the valuable input we get from the community. Thank you for all the
help!

### UI RFC

[Jojolepro][joj] wrote up a really big issue listing all kinds of use cases for UI.
The current UI implementation of Amethyst is very basic and only suitable for
simple interfaces.

[joj]: https://github.com/jojolepro

This RFC is still very broad; there are a bunch of topics like layout managers,
high-level API and UI elements discussed there, so make sure to weigh in if
you're interested in those things. You can find it [here][rfu].

[rfu]: https://github.com/amethyst/amethyst/issues/1072

### Scripting RFC

Scripting, usually associated with programming using a dynamic language to write
logic, is the typical way to create games with modern engines.
Amethyst does not yet have this functionality, but we're planning on something
big. The goal is to create an abstract layer that allows reasonably easy
addition of more scripting languages.

This would allow us to address a much bigger audience because most languages
could simply be added as an additional backend.

For that, [Moxinilian][mox] wrote an RFC you can see [here][rfs].
Feedback is very welcome, as well as suggesting more questions that
[the document][rfs] should answer.

[mox]: https://github.com/Moxinilian
[rfs]: https://github.com/amethyst/rfcs/pull/1

## Call for participation

We love contributions from the community, so if you see something you'd like
to work on, don't hesitate! We are going to help you and point you into the
right direction if something doesn't work out at first.

We have tasks with different difficulty. Make sure to choose easier ones at
first, because hard issues can become quite frustrating, especially if you
haven't worked on Amethyst before.

Here are seven issues for you to pick from:

* [very easy | **amethyst/laminar**] [Deny warnings for approved PRs][is0]
* [very easy | **amethyst/laminar**] [Use new Rust 2018 idioms][is1]
* [easy | **amethyst/amethyst**] [Doc improvements][is2] (you can add new suggestions or fix existing)
* [easy | **amethyst/amethyst**] [Look for reliable test coverage][is3]
* [moderate | **amethyst/amethyst**] [Generate graph of Amethyst API][is4]
* [moderate | **slide-rs/specs**] [Update book chapter about `FlaggedStorage`][is5]
* [moderate | **amethyst/amethyst**] [Ideas for managing graphics settings & applying changes][is6]

Please let us know that you're working on an issue using a short comment,
that way we can avoid duplicate work. Contributing to the discussion is also
appreciated!

Thank you for helping push the project forward!

[is0]: https://github.com/amethyst/laminar/issues/72
[is1]: https://github.com/amethyst/laminar/issues/70
[is2]: https://github.com/amethyst/amethyst/issues/951
[is3]: https://github.com/amethyst/amethyst/issues/1091
[is4]: https://github.com/amethyst/amethyst/issues/1044
[is5]: https://github.com/slide-rs/specs/issues/505
[is6]: https://github.com/amethyst/amethyst/issues/1019

