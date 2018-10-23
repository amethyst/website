+++
title = "Amethyst 0.9 has been released!"
description = "The Amethyst team is proud to announce our latest release, filled with new features and with massive improvements to the 2D workflow."
date = 2018-10-22
+++

## The Amethyst team is proud to announce our latest release, filled with new features and with massive improvements to the 2D workflow.

It has been 2 months since the last release, and we are proud to announce that version `0.9` of the Amethyst game engine is now available on [crates.io](https://crates.io/crates/amethyst)! We would like to thank the numerous contributors involved in this release; the full list is available below.

Now, onto the features!


## DrawSprite Pass

With `0.9` we are introducing a new way to draw sprites on the screen. Drawing a sprite is now as simple as just attaching a `SpriteRender` component to the entity you want to draw. This change also allowed sprite batching to be implemented meaning that you should now see a massive boost in performance when displaying a lot of sprites on the screen.

[100 000 sprites at 60 fps was even confirmed possible!](https://github.com/cart/amethyst-bunnymark)

We are also introducing new usability features for drawing in a 2D world. One of them is the ability to load spritesheets directly from files. This is done using the serde-compatible RON data format, making it very easy to load big spritesheets and convert them from other sprite sheet formats.

##  Networking

With `0.9`, we have started building a new networking system. The initial work was to implement some basic features on top of UDP. You can see that work [here](https://github.com/amethyst/laminar). With this as our solid foundation, our focus for `0.10` will be on higher-level abstractions, such as automatically syncing entities across clients. The current `amethyst_network` crate is expected to change a great deal in `0.10`. The current contents should be viewed as a proof-of-concept only.

In short, we're not quite production-ready yet, but we're getting there!


## Experimental Editor Support

Alongside continued development of the engine, members of the community have
been building out an experimental editor for building Amethyst games. The
first part of this work is the [amethyst-editor-sync] crate, which provides
a way for Amethyst games to connect to the editor. This is being built in a way that makes it possible to experiment with multiple different editors without committing to one technology.
Doing so allows us to get practical experience with a variety of GUI technologies so that we can eventually make an informed decision on which one to adopt for the official editor.

The first editor being built by the community is [randomPoison/amethyst-editor],
and it is being built with [Electron]. It currently has support for displaying
any Component or Resource that implements `Serialize`, and the upcoming 0.3
release will bring support for tweaking values in the editor and having them
update within the game.

![The Electron editor](https://raw.githubusercontent.com/randomPoison/amethyst-editor/master/screenshots/pong.gif)

![Edit support](https://cdn.discordapp.com/attachments/484132431411281953/503332493743882240/edit-resources-mvp.gif)

[randomPoison/amethyst-editor]: https://github.com/randomPoison/amethyst-editor
[amethyst-editor-sync]: https://crates.io/crates/amethyst-editor-sync
[Electron editor]: https://github.com/randomPoison/amethyst-editor
[Electron]: https://electronjs.org/


## New Convenience Features

This release brings with it a bunch of new convenience features. Here are some of the highlights:

*   A `Named` component was added to allow entities to carry arbitrary names.
*   Added `shadow_update` and `shadow_fixed_update` functions to `State` so it stays updated even when paused.
*   There is now a function called `application_root_dir` in `amethyst_utils` which allows you to get resources without having to rely on the cargo project path.
*   The `DebugLines` feature and graphical pass now allows showing debugging lines in the scene.
*   The `JsonFormat` was added, allowing the load of prefabs and arbitrary data as the Json format, in addition to the already available Ron format.
*   The `State::handle_event` method now allows receiving configurable and custom event types.
*   Orthographic cameras can now be adjusted to match the window size by using `CameraNormalOrthoSystem`.
*   Text alignment is now supported in the UI.
*   Multi-line text is now supported in the UI.
*   The new `Hidden` component can now be added to entities in order to temporarily stop rendering of them.
*   The `Removal` component allows to easily remove a group of entities at once by calling the `exec_removal` function. It can be used in combination with prefabs to switch between scenes and UI menus easily.
*   The `DestroyAtTime` and `DestroyInTime` components allow destroying entities at a future point in time. The first one specifies the exact time in seconds at which the entity should be destroyed, and the second one specifies a "time remaining to live" duration.
*   TGA image support.
*   The `Transform` component can be created from the `Vector3` translation.
*   Support to load native fonts for UiText (and UiButton!), as well as default fonts for text.


## Some Fixes

There has been a lot of bug fixing and tweaking going on for this release. Here is a highlight of some of them:

*   Flat render gamma should now be fixed in most cases.
*   Hardware compatibility should now be improved.
*   glTF scenes no longer have materials swapped around.
*   glTF node names are now loaded into the `Named` component.
*   glTF adds the MeshData component to create entities. We plan on adding configuration options for this soon.
*   Support for progressive JPEG loading was added.
*   Rendering work around for MacOS 10.14.X added.
*   The mouse hiding feature can now be configured through the `HideCursor` component.
*   Improved the configurability of the logger. (log level, log to file, etc…)
*   `ProgressCounter` now shows loading errors.
*   Improvements to `TextureMetadata` allows selecting the filtering method. (Nearest, Linear, etc…)
*   UI coordinates now go from bottom to top.
*   Fixed UI issue with anchors and global positionning.
*   Fixed UI issue where events were sometime ignored.

For a full list of changes, see [this changelog file](https://github.com/amethyst/amethyst/blob/master/docs/CHANGELOG.md).


## Documentation

This release, we continued with the trend launched by the 0.8 release: We kept a heavy focus on keeping the documentation up to date and to explain more of the internals of the engine.

The beginner tutorial has been made more beginner-friendly too, with easier to follow instructions.


## Previous and new Goals

In the previous release post we made a list for planned features that would have landed in this version. While not all of them made it in this time you can be sure that we are still working on making them a reality as soon as possible. The major new features of `0.10` are going to be the [new renderer](https://github.com/rustgd/rendy) and migrating to a new math library called [nalgebra](https://nalgebra.org/). If you want to help us make `0.10` even more awesome than this release, feel free to [join our Discord](https://discord.gg/GnP5Whs) and say hi; we are always happy to help new contributors!


## People we <3

We would like to thank all our contributors who were involved in making this release possible:

* @0rganic
* @Adrijaned
* @anderejd
* @askreet
* @azriel91
* @cs2dsb
* @DarrenTsung
* @distransient
* @FaultyRAM
* @fletcher
* @fushsnj
* @gardrek
* @highway900
* @jackmott
* @jjedelsky
* @jojolepro
* @khskarl
* @LEXUGE
* @LucioFranco
* @magnonellie
* @mh84
* @Moxinilian
* @msiglreith
* @NCrashed
* @nhowell
* @randomPoison
* @Rhuagh
* @Ristarg
* @rivertam
* @robinvd
* @scorbeil
* @SmashedCanary
* @sylvestre
* @Telzhaak
* @TimonPost
* @tomcumming
* @torkleyy
* @usbalbin
* @vektah
* @VictorKoenders
* @virome
* @Xaeroxe

As well as everyone who reviewed pull requests, opened issues, participated in the design discussions, and requested features!
