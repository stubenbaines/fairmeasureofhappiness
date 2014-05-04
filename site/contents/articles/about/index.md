---
title: About 
author: Dennis Pierce 
date: 2014-04-20
template: article.hbs
---
 
This site is built using [WIntersmith][1]. Whenever putting together a blog or small site, Wordpress has become the standard go-to choice. But when you are dealing with a small site that isn't going to get a ton of updates and traffic, it always felt wrong to go through the entire process to install Wordpress, get mysql up and running, and then have every page view dynamically generated via PHP. Static site generators caught my eye because they are the perfect solution to the Wordpress
install problem. When making my choice, I wanted a generator that was actively updated and was built in Node. 

I settled on Wintersmith because it looked like it was pretty flexible with support for plugins and different template engines. I immediately ripped out the Jade template engine and went with Handlebars. I'm not a fan of shorthand languages that compile into a real language (e.g., Jade and Coffeescript). I feel that it's better to be comfortable with the language the browsers are actually using rather than learning another layer removed. Also, HTML and Javascript are standards that aren't
going anywhere, but who knows how long Jade will be around since there are so many competing template engines. Also, I don't find HTML that hard to deal with so I don't need shortcuts. I do break my rule with SASS, but SASS succeeds for me because it uses CSS syntax as its base and then enhances on top of that. You can always drop down and write pure CSS and then start weaving in SASS enhancements as you like. Compare that to opening up a Jade or Coffeescript file where you are
presented with a completely different syntax that I find jarring after working with HTML and Javascript all day.

Anyway, so far Wintersmith has been a good tool to use, but in the future I'm going to see if I can find a similar tool that doesn't use Coffeescript. 

The front-end is pretty basic with only some basic Jascript coding to toggle classes for the card flip effect and mobile menu dropdowns. I also rely on [band.js][2] for working with the WebAudio API.  Originally I was going to hand-code the WebAudio calls, but I wanted to specify rhythms and that's when things got more complicated than I wanted to deal with. band.js already has rhythms and notes worked out and it worked OK for the small tune to play when clicking the footer logo. There is
a small issue with the library not supporting the older Webkit WebAudio methods which causes the library to blow up on iOS devices. So to fix that I had to install a polyfill to provide a bridge from the Webkit api to the current standard (createGainNode to createGain).

The CSS framework is using Bourbon, Neat, and Bitters. I originally tried Gumby but explain why I switched to Bourbon in another [blog post][3].

Source code for my site is available on [github][5].

Last, but not least, the name for my company/domain  comes from a scene in the silent movie *Intolerance*.

>The girl of our story keeps 
house for her father who works 
in a Jenkins mill. With a wage 
of $2.75 a day, a little garden, 
four hens, ditto geese, and a 
fair measure of happiness and contentment.

![The Dear One][4]

[1]: http://wintersmith.io
[2]: https://github.com/meenie/band.js
[3]: /articles/gumby-bourbon/
[4]: dearone.jpg "The Dear One"
[5]: https://github.com/stubenbaines/fairmeasureofhappiness
