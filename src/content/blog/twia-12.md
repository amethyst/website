+++
title = "This week in Amethyst 12"
description = "What happened this week: new CI strategy, tutorial improvements and upcoming features"
date = 2018-10-27
[extra]
author = "torkleyy"
author_link = "https://github.com/torkleyy"
+++

Hello and welcome to the 12th issue of _This Week in Amethyst_, a blog bringing to
you the latest changes regarding Amethyst, a data-driven game engine written in
Rust.

We're very proud of the fast growing activity on our project! Given the wide
interest from the community, we figured it's time to continue
_This Week in Amethyst_. We'd like to go with the following structure from now
on:

* important recent changes
* chosen ongoing issues / PRs with high importance and / or activity
* call for participation

A list of new contributors, issues and PRs will no longer be included. New
contributors will be listed in release posts; issues and PRs have gotten far
too many to list them all here.

## New CI strategy

CI is crucially important for any project, even more so for the big ones. That
said, Travis and AppVeyor have been causing us issues for a long time now,
blocking effective work on the engine due to long build times. While Travis
did generally work better than AppVeyor, it cannot handle the massive workload
that Amethyst generates with all the PRs and staging
builds<sup><a href="#fn1" id="r1">[1]</a></sup>.

After an insane amount of research and experimentation, [Ellie][ell] has come
up with a big first step to improve the situation, implemented by
[this PR][prc]. These are the changes in short:

* use [Concourse][con] as a first pass for building PRs for Linux and showing
  its status
* thanks to Travis' new Windows support, Travis can now be used to build for all
  three platforms; it will now be used by
  bors<sup><a href="#fn1" id="r1">[1]</a></sup>, as a final check before merging
  the PR into master
* AppVeyor has been dropped entirely

[ell]: https://github.com/magnanellie
[prc]: https://github.com/amethyst/amethyst/pull/1047
[con]: https://concourse-ci.org/

This way, Travis has less workload and is only needed when a PR is merged.
By using Concourse we not only avoid blocking our merging pipeline, but we
now also have dedicated status reports for tests, book tests and correct
formatting.

## What's being worked on currently?

Amethyst's math library has been using `cgmath` so far, but we've decided that
we want to move to Nalgebra. We previously used `cgmath` due
to both historic and simplicity reasons. Since it changed into maintainance
mode<sup><a href="#fn2" id="r2">[2]</a></sup>
and `nalgebra` has an easier API now, we're doing the migration.
We think this is an important step for unifying the Rust ecosystem.
Thanks to [Ellie][ell] for doing [the migration PR][prn]!

[nlg]: https://www.nalgebra.org/nalgebra_glm/
[prn]: https://github.com/amethyst/amethyst/pull/1066

The transition to Nalgebra in Amethyst & its [rhusics bridge][brh] is going to
be the focus for this release. Meanwhile, [Rhuagh][rhu] and [sebcrozet][seb]
are working on [better ECS support][npe] for [`nphysics`][nph] (work hasn't
started on the nphysics-ecs repo just yet, but it's planned for this weekend).

[brh]: https://github.com/amethyst/amethyst-rhusics
[rhu]: https://github.com/Rhuagh
[seb]: https://github.com/sebcrozet
[npe]: https://github.com/rustsim/nphysics-ecs
[nph]: https://github.com/rustsim/nphysics

In other news, [Yuurai][yuu] is working on a formatting tool for [RON files][ron]!
You can find the repo [here][rof], but note that it's still very experimental.
This will make our lives a lot easier since RON files are used for configuration
and prefabs in Amethyst; soon we'll no longer have to format them by hand!

[yuu]: https://github.com/Ristarg
[ron]: https://github.com/ron-rs/ron
[rof]: https://github.com/Ristarg/ronfmt

Speaking of prefabs... [Rhuagh][rhu] is working on [a PR][prd] that lets us define
new prefabs very easily, with much less boilerplate. With the new macro it will
be as easy as adding a few derives:

```rust
#[derive(Default, Deserialize, Serialize, PrefabData)]
#[serde(default)]
struct ScenePrefabData {
    transform: Option<Transform>,
    gltf: Option<AssetPrefab<GltfSceneAsset, GltfSceneFormat>>,
    camera: Option<CameraPrefab>,
    light: Option<LightPrefab>,
    tag: Option<Tag<AnimationMarker>>,
    fly_tag: Option<ControlTagPrefab>,
}
```

[prd]: https://github.com/amethyst/amethyst/pull/1035

## Interesting discussions

There's one RFC chosen to be presented here, 
"Std I/O driven application (aka `amethyst_commands`)" ([link][rfc]).

This RFC, written by [azriel][azr], is part of a bigger topic, runtime
modification of the game and control of its behavior. This is required for
many things like the editor, networking, modding, scripting, etc. Make sure
to weigh in if you have any ideas regarding these topics! We're hoping that
we can find a way to make all of that possible with as few APIs as possible.

The RFC specifically is based on code [azriel][azr] has already implemented for 
[their own game][wil]. Here's a little proof of concept they posted a while ago,
so you can get an idea what this is about:

{{ youtube(id="jpk2MTeWz3w", class="youtube") }}

We're happy to get some input from you!

[rfc]: https://github.com/amethyst/amethyst/issues/999
[azr]: https://github.com/azriel91
[wil]: https://azriel.im/will/

## Call for participation

We love contributions from the community, so if you see something you'd like
to work on, don't hesitate! We are going to help you and point you into the
right direction if something doesn't work out at first.

We have tasks with different difficulty. Make sure to choose easier ones at
first, because hard issues can become quite frustrating, especially if you
haven't worked on Amethyst before.

Here are seven issues for you to pick from:

* [very easy] [Help us remove some unwraps!][is0]
* [easy] [Doc improvements][is1] (you can add new suggestions or fix existing)
* [easy] [Textures are dynamic unconditionally][is2]
* [moderate] [Lighting / Pass compatibility][is3]
* [moderate] [Create architectural overview of Amethyst][is4] (can be auto-
  generated)
* [moderate] [Write animation tutorial for the book][is5]
* [moderate] [Managing graphics settings & applying changes][is6]

Please let us know that you're working on an issue using a short comment,
that way we can avoid duplicate work. Also note that you can help by
contributing to the discussion; especially the last issue can really use
some more input!

Thank you for helping push the project forward!

[is0]: https://github.com/amethyst/amethyst/issues/908
[is1]: https://github.com/amethyst/amethyst/issues/951
[is2]: https://github.com/amethyst/amethyst/issues/977
[is3]: https://github.com/amethyst/amethyst/issues/855
[is4]: https://github.com/amethyst/amethyst/issues/1044
[is5]: https://github.com/amethyst/amethyst/issues/637
[is6]: https://github.com/amethyst/amethyst/issues/1019

<a href="#r1" id="fn1">[1]</a> [bors][bor] is a GitHub bot that merges our PRs and makes
sure they're compatible with the latest master by using a "staging" branch.
You can read more about that on [their website][bor].

<a href="#r2" id="fn2">[2]</a> `cgmath` has been moved into [rustgd][rgd] and is not
having a lot of activity. If there is a PR, it's going to be merged, but
nobody expects a lot of work to happen on it.

[bor]: https://bors.tech/
[rgd]: https://github.com/rustgd/
