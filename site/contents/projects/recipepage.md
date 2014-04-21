---
title: Epicurious Recipe Redesign 
type: work
date: 2013-10-15
summary: Rewrite/redesign of Epicurious' recipe pages. 
template: project.hbs
thumb: /img/projects/epi_recipe_thumb.jpg
image: /img/projects/epi_recipe.jpg
technology: Backbone, Underscore, Javascript, REST, Ajax, Spring. 
tags: web
url: http://www.epicurious.com/recipes/food/views/Sausage-Cheese-and-Basil-Lasagna-103005 
----
Epicurious is a site with a long history. With a long history sometimes comes a fear of change because you have many systems that people are afraid of touching. The Epi product team came up with great ideas to modernize the recipe page. [Hon Chih
Chen](https://github.com/honchihchen "Hon Chih's git repo") and I worked as part of the tech team to implement the new changes. 

Some of the highlights were ripping out old DWR-based Ajax services and replacing with a Backbone-based framework. We went through the rest of the dynamic elements of the page and converted them to Backbone views (no more HTML strings in the Javascript). Similar to the recipe box work, we had to set up a framework to manage all of the views to make sure that with all of the new layers we were adding, we didn't have cases of multiple layers colliding with each other. For example, notice if you
click to rate a recipe and then click to print, you will notice that the layers close and you don't have overlapping prompts. 

We also added a related recipe riser that pulls in recipes related to the current recipe or the current search terms if the user is coming from a search result. On the ad side, we implemented a sticky header to increase viewablilty of the top banner ad. I also built a custom ad product that gives advertisers a premium ad placement in the
related recipe riser.  
