#Readme
Source code for [fairmeasureofhappines.com][1]. Built using Wintersmith and Handlebars. For more details see my [blog post][2].

##Running the site
```bash
npm install
```

NOTE: There are some issues with the handlebars plugin. 1. The version of handlebars is old. 2. The latest version on npm is not in sync with github.
[https://github.com/tnguyen14/wintersmith-handlebars/issues/15][3]
So until those issues are fixed, you need to manually pull the wintersmith-handlebars version from npm and also update handlebars in the package.json
to 1.3.1.

```bash
wintersmith preview
sass --watch stylesheets:contents/css
grunt watch
```

##TODO: 
- consolidate sass watch into grunt task.

[1]: http://www.fairmeasureofhappiness.com
[2]: http://www.fairmeasureofhappiness.com/articles/about/
[3]: https://github.com/tnguyen14/wintersmith-handlebars/issues/15
