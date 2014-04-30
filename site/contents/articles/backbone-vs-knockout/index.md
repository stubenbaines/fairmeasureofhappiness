---
title: Backbone vs. Knockout 
author: Dennis Pierce 
date: 2014-04-11
template: article.hbs
---

Over the last year or so, I've gone with Backbone.js as my preferred framework for building web applications. I like how Backbone is not opinionated and provides a good toolbox, but also a lot of freedom in building a web application. Recently, a client project had Knockout as one of the available libraries rather than Backbone, so being the good consulting company we are, we went with the flow and built the app using Knockout.

Knockout did the job without any problems and both are great frameworks. Both give you a model-view framework with templating and clean updating of the UI on events. I found Knockout to easy to work with and flexible enough to give freedom in how I wanted to build my app. Here are some of my thoughts comparing the two after coming from a primarily Backbone background.

## Knockout and data binding in HTML
This is the ugliest part of Knockout for me. With Knockout, you are putting all of your data bindings into HTML as data- attributes. With HTML5, this is valid, but it almost feels like going back to the old inline Javascript style with onclicks and onfocus attributes. For example, here's an example of some data bindings on a button:
```html
<button data-bind="click: resetForm">Clear</button>
```

The purist in me feels that you shouldn't have all of this logic in your markup. If your markup is supposed to be just describing the structure, but then it's peppered with a ton of Knockout-specific bindings, it doesn't feel as portable.

## More magic with Knockout
The nice thing about Backbone is that there is very little "magic" going on. Which means to me I can follow the flow of what Backbone is doing easily. Specifically, you set up a render method in your view and you run the command to render a template using the JSON representation of a model. In Knockout, you set up a bunch of observables on your DOM elements and Knockout takes it from there. It's pretty slick, but I found it easier to step through Backbone code when there were bugs since there was less behind the scenes magic.

## Extending with Backbone and plain objects with Knockout
In Backbone, everything is extending Backbone views, models or collections. With Knockout, you are just creating normal Javasript objects and then you can make attributes of the objects that are Knockout observables. The Knockout approach was interesting in that you didn't need to dig into the API to learn what methods and properties you were inheriting from the base class. You just built your objects as you see fit and then create Knockout observables out of the properties you want to bind to the DOM.

## No dependencies with Knockout
Backbone requires underscore.js and you pretty much need jQuery for other functionality. Knockout has no dependencies. I like Underscore and jQuery is always used on our projects, so I'm not too concerned with Backbone lining up with those libraries.

I'm going to stick with Backbone, mostly because I don't like embedding the bindings in HTML. I do like how you create plain Javascript objects in Knockout, but overall it feels cleaner to have your HTML just structure and then bind everything in the Backbone views.
