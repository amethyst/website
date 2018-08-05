+++
title = "Amethyst 0.8 has been released!"
description = "With a brand new tutorial and a ton of new features, including prefabs, controller support, MP3 audio, localisation and an even better ergonomics!"
date = 2018-08-05
+++
Hello everyone! Amethyst version 0.8 just got released, and with it comes a ton of new stuff!

## Website
We have a brand new website! You are even looking at it right now.  
We hope you will like it! Feel free to check out [the home page](https://www.amethyst.rs/) for more info about Amethyst.

## Tutorial
We also have a brand new tutorial!
Everything you need to know about the concepts and terminology of the engine is in there, along with examples and hands-on exercises.
You can read the new tutorial [here](https://www.amethyst.rs/book/master/)!

## New Features

* Localisation wrapper around the `fluent` crate.
* Added raw mouse movement events to player controllers.
* Added Arc Ball Camera (3rd person controller).
* Prefabs! Oh, and also you can nest them into one another.
* Better text caching.
* Utilities for input handling.
* UIButton improvements! (Automatically play sounds, change texture and more!)
* Helper function for single-pass renderer. Less boilerplate!
* Shape mesh generator.
* More user-friendly UI systems.
* MP3 file support.
* User-friendly sprite rendering utilities. Easily create sprites from complex spritesheets.
* Better logging support.
* Controller support!
* Some minor bugfixes.

See all the merged pull requests [here](https://github.com/amethyst/amethyst/pulls?page=1&q=is%3Apr+is%3Amerged+merged%3A%3E%3D2018-05-01&utf8=%E2%9C%93)!

## About prefabs

You can create most of your game as simple text files. Everything that is pure data (ui, scenes, players, entities and components) can all be created as prefabs.
This means that you can easily copy big reusable chunks from one game to another, and even share pieces of it with the community!

Data-oriented programming allows you to accelerate the prototyping speed and reusability of your projects a lot.

## Community

In the past few months, we saw a big increase in the number of developers joining the project. Welcome and thanks to every single of you!
It is because of the continuous support we get from the community that we are able to keep pushing the Amethyst project forward.

Thanks to everyone, from people simply using the engine and asking questions up to all the contributors regularly creating new content for everyone to enjoy!

### New Core Member Promotion

Congratulations to [@Moxinilian](https://github.com/Moxinilian) for his promotion to the core developer team!

Here is what he has to say about the engine:

>Hi!<br>
>First of all, I would like to thank all the awesome people of the Amethyst project for their help and what they taught me during the last few months. Working on Amethyst has been a hell of a ride, and it's been tons of fun so far!<br>
>I began contributing to Amethyst originally because I wanted to make a game using cutting edge technologies and workflow, but I could not find a game engine that was both modern and satisfied my specific needs. So I decided to start contributing to the most promising one!<br>
>I had never worked on an open source project before and so far it as been nothing but a great experience. I have multiple subprojects in the engine I care about a lot (most notably mobile devices support and 2D ease of use utilities)  and I can't wait to get them done!

## Release Cycles

While we have yet to figure out how we could possibly have a fixed release schedule, we do understand the importance releasing more often.
Therefore, we plan on limiting this release cycle to a time frame of between one and two months, so that you can experience all the new features without needing to use the develop branch.

## Planned Features for 0.9

While you're still here, we can already tease a couple of the features we want to get in version 0.9:

* Networking: Udp connection management and client-server infrastructures.
* Terminal duplex. See your game output while being able to enter commands and control and debug the engine at runtime!
* Prototyping improvements: an easy to use bundle with all the common things used in an Amethyst game.
* Sprite renderer pass for improved sprite support and easier manipulation.
* (Maybe) More Ui components.

## Future Major Features

And here are our important milestones we hope to get working soon!

* New rendering stack
* Mobile support
* Scripting
* Editor (We mostly need to finish the ui components before we can create the editor.)
* Advanced network systems (lag compensation, priority queues)