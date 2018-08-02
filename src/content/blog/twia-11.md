+++
title = "This Fortnight in Amethyst 11"
description = "Eleventh issue of This Week in Amethyst."
date = 2017-10-18
aliases = ["/2017/10/18/twia-11.html"]
+++
> News from `Sep 16, 2017` – `Oct 18, 2017`

Hello and welcome to the `11th` issue of *This Fortnight in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every fortnight. If you have any suggestions or ideas, feel free to voice them
[on GitHub][gh] or [the Gitter chat][gc].

[gh]: https://github.com/amethyst/website
[gc]: https://gitter.im/orgs/amethyst/rooms

`25` pull requests, [in the engine][ep] landed this fortnight.

[ep]: https://github.com/amethyst/amethyst/pulls?q=is:pr+closed:2017-09-16..2017-10-18

## Announcements

Amethyst is considering participating in Google's Summer of Code, but we need
more mentors!  If you'd like to volunteer please let us know on [#412][412]

Also, as you can see the blog has moved to a bi-weekly format.

[412]: https://github.com/amethyst/amethyst/issues/412

## What's cooking on develop?

### Notable additions

* Assets have been reworked on develop!  We've made the system less
abstract and more flexible.  Thanks [@torkleyy][tr] for your tireless efforts
on this front! [#416][416]

* Major project restructure.  We're currently working on a large scale overhaul
to the project structure, new crates will be appearing and functionality will
be moved from the core crate to these new crates.  After this is complete we're
hoping your import lists will look much cleaner and structures and functions
will be easier to find.  Thanks [@Rhuagh][rh] for your many pull requests to
help accomplish this! (Too many pull requests to list for this bullet)

* Renderer resizing has landed!  Your render targets will now resize with the
window. This was authored by yours truly, [@Xaeroxe][xr] in [#402][402]

* But will it blend?  Amethyst now has support for BlendTargets in passes,
enabling you to provide and use blending algorithms for your rendering, this makes
things like transparent and translucent passes possible. Authored by
[@Xaeroxe][xr] in [#411][411]

* Your game will now by default automatically close when a `Window::Closed` event
is received, you no longer need to explicitly quit in every state when this
event arrives. Authored by [@Xaeroxe][xr] in [#420][420]

* WindowMessages have arrived on develop!  A new resource added to the specs
world permits you to provide closures to operate on the `winit::Window` allowing
you to programmatically hide the cursor, and resize the window among other things.
Authored by [@Xaeroxe][xr] in [#387][387]

[rh]: https://github.com/Rhuagh
[tr]: https://github.com/torkleyy
[xr]: https://github.com/Xaeroxe

[387]: https://github.com/amethyst/amethyst/pull/387
[402]: https://github.com/amethyst/amethyst/pull/402
[411]: https://github.com/amethyst/amethyst/pull/411
[416]: https://github.com/amethyst/amethyst/pull/416
[420]: https://github.com/amethyst/amethyst/pull/420

### Breaking changes

The entire project has been restructured, and assets have been rewritten.
You'll likely need to update your import lists when upgrading, and restructure
how you're handling assets.  We apologize for this maintenance burden, but we
feel it's worthwhile as the new asset system will permit much more robust
asset loading in the future, such as our upcoming GLTF loader.

In addition to this a large volume of generic parameters have been removed across
the project and replaced with suitable types internally.

## Calls for participation

While we don't have any specific calls for participation this post please never
hesitate to send us a PR if you've got something you want to contribute!  We're
always happy to have more contributors!

## New contributors

* [@Unbu][ub]

[ub]: https://github.com/unbu

## New issues

* [#429][429]: Passes have too much boilerplate
* [#428][428]: Rendering optimization notes
* [#414][414]: Add controller support
* [#412][412]: Google Summer of Code?
* [#396][396]: Make crates more self-contained and introduce `amethyst_core`

[429]: https://github.com/amethyst/amethyst/issues/429
[428]: https://github.com/amethyst/amethyst/issues/428
[414]: https://github.com/amethyst/amethyst/issues/414
<!-- Issue 412 was already linked above -->
[396]: https://github.com/amethyst/amethyst/issues/396