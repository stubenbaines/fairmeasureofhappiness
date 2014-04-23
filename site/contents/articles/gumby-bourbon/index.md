---
title: Why I Moved from Gumby to Bourbon 
author: stubenbaines 
date: 2014-04-19 15:00
template: article.hbs
---

I like the idea of using a CSS framework to simplify the layout of a page and also to rapidly prototype UI elements without having to write tons of code. If you need to slap some nice-looking buttons on the page then Twitter Bootstrap and Gumby have been a choice.

Originally I was playing with Twitter Bootstrap because it seemed like the first framework to gain popularity. The problem is that I use SASS so I started looking for an alternative that used SASS. I ended up working with Gumby and that seemed to be the answer. But the more I used Gumby, I became more annoyed with all of the base styles it forced on me. I ended up having to override styles set up in Gumby to get the pages to look the way I wanted. I know the 

Another area I'm not a fan of Gumby is with it's Javascript integration. There is something nice about having common UI patterns such as modals and drawers work, but it does require Gumby's own JS. Gumby's JS bundles jQuery which means if you already have jQuery (which you probably do) then you may need to decouple from the gumby directory. 

Last, as I read I noticed lots of complaints about compass being too complicated and big. I never quite did understand why Compass needed to sit on top of SASS it was like too many layers of abstraction. 

After digging around I found an alternative in the Bourbon/Neat/Bitters family. I like how they break down their frameworks into pieces where you can pick and choose what you want from them. I also like how their examples for best practices are not baked into the code but rather require the developer to copy to implement on their own. I feel this a far more realistic use case where in my career I've never been able to use any widget out of the box. I've never worked with a designer or product
person who wants the default look and behavior for a widget. It's all great that Gumby provides a sample set of buttons, but in reality, no one will ever design their page around those buttons. 
