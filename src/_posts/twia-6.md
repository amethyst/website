extends: post.tpl

title: This Week in Amethyst 6
date: February 22, 2016
---

> News from Feb 15, 2016 – Feb 22, 2016

Hello and welcome to the sixth issue of *This Week in Amethyst*, a blog
bringing you the latest changes and updates regarding the Amethyst game engine
every week. If you have any suggestions or ideas, feel free to voice them
[on GitHub][gh] or [the Gitter chat][gc].

[gh]: https://github.com/amethyst/website
[gc]: https://gitter.im/ebkalderon/amethyst

No new pull requests landed this week.

## What's cooking on master?

### Notable additions

* A 2013 presentation titled [*Bitsquid: Behind The Scenes*][bs] has been added
  to the list of design inspiration documents. It covers a variety of topics,
  namely data-oriented design, job parallelism, rapid game development, and
  lessons learned from the game industry. Huge thanks to BitSquid developer
  [@niklasfrykholm][nf] of Autodesk for making this summary!

[bs]: https://www.kth.se/social/upload/5289cb3ff276542440dd668c/bitsquid-behind-the-scenes.pdf
[nf]: https://twitter.com/niklasfrykholm

* [Implementation of the user-facing API of `amethyst_ecs` has begun][pu]. This
  brings us one step closer to merging the [ECS game framework][ec] into the
  mainline. Join the discussion on [engine issue #10][e10].

[pu]: https://github.com/ebkalderon/amethyst/blob/ecs/src/ecs/examples/proposed_usage.rs
[ec]: http://ebkalderon.github.io/amethyst/glossary.html#Entity-component-system%20%28ECS%29%20model
[e10]: https://github.com/ebkalderon/amethyst/issues/10

## New issues

No new issues were opened this week!

## New contributors

No new people have joined this week!

## Other announcements

[Draft 2.0 of the renderer diagram was published to master this week.][rd]
The design has been simplified considerably with the elimination of intermediate
representation (IR) from the renderer, originally conceived for providing
network transparency and tool slaving capabilities.
[This responsibility has been moved upward to the engine level][el].
allowing for things like [SFM][sf]-style demo record and replay and other
goodies. Please leave your thoughts on [engine issue #19][e19].


[rd]: https://raw.githubusercontent.com/ebkalderon/amethyst/master/book/images/design/renderer_2.png
[el]: https://github.com/ebkalderon/amethyst/issues/19#issuecomment-186502661
[sf]: https://en.wikipedia.org/wiki/Source_Filmmaker
[e19]: https://github.com/ebkalderon/amethyst/issues/19

Some meta-news: starting next issue, TWIA's release schedule will shift from
every Monday to every Sunday. This is to get our newsletter in sync with
[*This Week in Rust*][tw] so readers aren't stuck reading last week's post
every time. Hopefully this will make things more convenient in the long run!

[tw]: https://this-week-in-rust.org/
