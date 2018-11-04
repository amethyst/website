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

..is now as easy as:

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

### laminar

TODO
TODO
TODO

### rendy - Yet another Vulkan based rendering engine

TODO: should this be here?

---

TODO: anything else?

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

[is0]: https://github.com/amethyst/laminar/issues/80
[is1]: https://github.com/amethyst/laminar/issues/70
[is2]: https://github.com/amethyst/amethyst/issues/951
[is3]: https://github.com/amethyst/amethyst/issues/1091
[is4]: https://github.com/amethyst/amethyst/issues/1044
[is5]: https://github.com/slide-rs/specs/issues/505
[is6]: https://github.com/amethyst/amethyst/issues/1019

