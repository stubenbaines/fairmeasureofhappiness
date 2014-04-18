---
title: "CSS Framework"
author: Dennis Pierce 
date: 2014-04-10
template: article.hbs
---

I originally started building my site using Gumby, but all through my time working with Gumby I felt like I ended up overwriting too much. The framework is nice and is good for rapid prootyping, but I feel like when you want to start implementing your own designs, then Gumby starts to feel like it's in your way. I went to switch out Gumby with something more lightweight. 

Originally I went with Susy because it runs on Compass and I had already had Compass installed for Gumby. THe first strike against susy was when I tried to follow the steps on the website to install susy. I recieved this errpr:

Gem::LoadError on line 230 of /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/rubygems.rb: can't activate sass (~> 3.3.0, runtime) for ["susy-2.1.1"], already activated sass-3.2.19 for ["compass-0.12.5"]

Looks like susy uses a different version of sass than what's included with the latest release of Compass. I do some digging and it looks like I need to use a pre-release version Compass to run Susy which feels like bullshit. The site says the latest version of COmpass should be released any time. Well, I check the COmpass site and the release has been sitting for 4 months and currently it's at 63% of the bugs fixed so seems like it's still a ways away. Maybe I'm paranoid but I don't want to run
a pre-release version of Compass. I then see some notes to use Bundle to avoid the dependency hell, but this is already feeling to convoluted for a tool that is supposed to make my life easier. 

As I'm googling I start letting the public opinion that Compass is too heavy and too overblown start to sway me towards a Bourbon and Neat.


