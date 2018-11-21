+++
title = "This week in Amethyst 15"
description = "What happened this week: new logo, laminar integration, pausable systems and more"
date = 2018-11-18
[extra]
author = "jojolepro"
author_link = "https://github.com/jojolepro"
+++

Hello and welcome to the 15th issue of _This Week in Amethyst_, a blog bringing to
you the latest changes regarding Amethyst, a data-driven game engine written in
Rust.

Content of this issue:

* Recent changes
* Current work
* Interesting discussions
* Call for participation

## Recent changes

* [The new logo by Ellie][1143] has been integrated into the examples.
* Callback Queue allowing better support for async tasks. [#1125][1125]
* With the [Laminar][laminar] 0.1.0 release, [it is now integrated][1137] into Amethyst.
* [The look-at method was fixed][1142].
* [Rendering 2D images][1153] is now much easier thanks to the changes made by @happenslol, based on the suggestions from [this RFC][rfc5].

[laminar]: https://github.com/amethyst/laminar
[1125]: https://github.com/amethyst/amethyst/pull/1125
[1137]: https://github.com/amethyst/amethyst/pull/1137
[1143]: https://github.com/amethyst/amethyst/pull/1143
[1142]: https://github.com/amethyst/amethyst/pull/1142
[1153]: https://github.com/amethyst/amethyst/pull/1153
[rfc5]: https://github.com/amethyst/rfcs/pull/5

## What's being worked on currently?

* [Pausable Systems][wo1] and how to achieve them within Amethyst by @udoprog
* [Better support for dynamic images][wo2] by allowing dynamicly sized images to be rendered properly by @Stoeoef

[wo1]: https://github.com/amethyst/amethyst/pull/1146
[wo2]: https://github.com/amethyst/amethyst/pull/1144

These are only a few of the items that are being currently worked on. If you're interested you can check out more open PRs [here](prs).

[prs]: https://github.com/amethyst/amethyst/pulls

## Interesting Discussions

* There are discussions about making Amethyst either a binary, or to greatly improve the usability in [this RFC](https://github.com/amethyst/rfcs/pull/6).
* Discussions are still ongoing to find the most flexible [ui layouting solution](https://github.com/amethyst/amethyst/issues/1072).
* A big goal of Amethyst is to be user-friendly. As such, we opened [an issue](https://github.com/amethyst/amethyst/issues/1152) to gather opinions on this subject.

## Call for participation

We love contributions from the community, so if you see something you'd like
to work on, don't hesitate! We are going to help you and point you in the
right direction if something doesn't work out at first.

Here are some issues for you to pick from:

* [easy | **amethyst/amethyst**] [Add InputEvent<AC> to the default StateEvent][is3]
* [easy | **amethyst/laminar**] [Polish crates (more config options, docs, code coverage)][is1]
* [moderate | **amethyst/laminar**] [Help writing the book documenting the protocol][is2]
* [hard | **amethyst/amethyst**] [Investigate crash related to multisampling][is4]
* [hard | **amethyst/amethyst**] [Fill the gap in Light support][is5]

Please let us know that you're working on an issue using a short comment,
that way we can avoid duplicate work. Contributing to the discussion is also
appreciated!

Thank you for helping push the project forward!

[is1]: https://github.com/amethyst/laminar/issues/45
[is2]: https://github.com/amethyst/laminar/issues/33
[is3]: https://github.com/amethyst/amethyst/issues/1148
[is4]: https://github.com/amethyst/amethyst/issues/135
[is5]: https://github.com/amethyst/amethyst/issues/855
