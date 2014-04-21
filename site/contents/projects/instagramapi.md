---
title: Instagram PHP API 
date: 2014-02-15
type: personal 
summary: An open-sourced PHP API to interact with the Instagram API. 
template: project.hbs
thumb: /img/projects/instagramAPI_thumb.jpg
technology: php, git 
tags: php, instagram, api, OAuth 
url: https://github.com/stubenbaines/InstagramPhpApi
---
I worked on a project for a client where I needed to interact with the Instagram API via PHP. Instagram only provides Ruby and Python libraries so I put together a PHP library for use on the project. My first pass only required non-authenticated calls which only required a client id to be passed to the endpoints.

After the project completed, I went back and added support for authenticated calls using OAuth where you need to have the user authorize Instagram and then receive an access token to sign all requests with the API. I tried to model the API on similar ones from Twitter and Facebook. 

