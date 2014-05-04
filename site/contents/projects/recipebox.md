---
title: Epicurious Recipe Box 
type: work
date: 2013-07-15
summary: Complete rewrite of Epicurious' recipe box to be an Ajax-driven single page application. 
template: project.hbs
thumb: /img/projects/epi_recipebox_thumb.jpg
image: /img/projects/epi_recipebox.jpg
technology: Backbone, Underscore, Javascript, REST, Ajax 
tags: web
url: http://www.epicurious.com/community/myepi/myrecipebox 
----
Epicurious originally implemented their recipe box functionality storing data in their own database and the pages worked as an old-school webapp with a form post/page refresh needed for every action. Epi then partnered with Ziplist to provide a more robust recipe box functionality. Ziplist provides a REST API to get, save, and edit recipe box data, and I was tasked with rebuilding the entire front-end from scratch. I chose Backbone as the framework and worked with [Hon Chih
Chen](https://github.com/honchihchen "Hon Chih's git repo") to implement the functionality.

Backbone worked out well for us, but there were plenty of challenges to overcome. First up was we had to override the default synch method because interacting with Ziplist required a custom OAuth-like system of signing API requests with tokens so I needed to run our authentication logic before firing the Ajax requests. The other main challenge was setting up ways to manage all of the multiple sub-views. The thing I like about Backbone is that it is lightweight and doesn't force its structure on
you. But it can also be overwhelming because it becomes tricky to figure out how to structure an app with lots of views and sub-views. In our case all of the views needed to respond to state
changes with the central recipe box model. For example, if you delete a recipe from a folder, that change needs to broadcast out so the folder view, recipe view, and folder overlay views all know about this change. We ended up wiring up our own event and view managers to serve as a traffic cop and make sure all views received their necessary updates and updated appropriately. 

I think we ened up with a relatively decoupled solution and we were able to leverage most of the code for use on the [Epicurious recipe redesign](/projects/recipepage.html). If I had to do this again, I would probably investigate using an application framework like Marionette to help with managing all of the views, but it's good we built the solution by hand so we better understood where Backbone starts and ends. 
