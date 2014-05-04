---
title: Gumby to Bourbon 
author: Dennis Pierce 
date: 2014-04-19
template: article.hbs
---

I like the idea of using a CSS framework to simplify the layout of a page and also to rapidly prototype UI elements without having to write tons of code. If you need to slap some nice-looking buttons on the page then Twitter Bootstrap and Gumby have worked out as a quick option.

Originally I was playing with Twitter Bootstrap because it seemed like the first framework to gain popularity. The problem is that I use SASS so I started looking for an alternative that used SASS. I ended up working with Gumby and that seemed to be the answer. But the more I used Gumby, I became more annoyed with all of the base styles it forced on me. I ended up having to override styles set up in Gumby to get the pages to look the way I wanted. I know the 

Another area I'm not a fan of Gumby is with it's Javascript integration. There is something nice about having common UI patterns such as modals and drawers work, but it does require Gumby's own JS. Gumby's JS bundles jQuery which means if you already have jQuery (which you probably do) then you may need to decouple from the gumby directory. Also, to automate the installation of Gumby you have to run another installation tool (Claymate). I'm already running Grunt, Bower, and other
tools so I didn't want to add yet another command line tool to my development process.

Gumby does allow installation from Bower, but there are some issues because if you want to edit some variables, you need to edit the _variables.scss. Problem is that file is part of the Gumby installation. I feel like the SASS should be structured so you can do all overrides from _custom.scss and not touch any of the Gumby source files.

Last, as I read I noticed lots of complaints about compass being too complicated and big. I never quite did understand why Compass needed to sit on top of SASS it was like too many layers of abstraction. 

After digging around I found an alternative in the Bourbon/Neat/Bitters/Refills family. I like how they break down their frameworks into pieces where you can pick and choose what you want from them. UI elements are not baked into the code but rather require the developer to copy code from the Refills examples. On the surface this feels less easy to use when you can just put a class on an item in Gumby and get badges or buttons, but long term, Refills addresses a more realistic use
case. I've never been able to use any widget out of the box; na designer or product person will want the default look and behavior for a widget. It's all great that Gumby provides a sample set of buttons, but I soon found myself fighting the framework to override the default looks. Refills lets you pick and choose what pieces you want to implement. 

So for quick and dirty, I may still consider Gumby, but overall I think Bourbon is a more production-ready solution to a responsive CSS framework.
