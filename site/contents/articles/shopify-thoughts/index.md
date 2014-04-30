---
title: Thoughts About Shopify 
author: Dennis Pierce 
date: 2014-03-02
template: article.hbs
---
 
Gotham Pixel Factory has been working with clients that are looking for an ecommerce site. Our clients want a site developed for a low cost and with a fast turnaround, but also heavily customized. To reconcile these competing requirements, we gave Shopify a try rather than rolling our own solution or installing something like Magento on the client's servers. Shopify bills itself as an easy-to-use ecommerce framework that runs completely in the cloud. It's similar to Wordpress in that you can install different themes and use a control panel to configure a store. It also allows developers to get access to the templates under the hood to customize the store.

After successfully implementing stores with Shopify, below are our thoughts on how well it worked and what are its limitations.
# What it does well
## It delivers on its main goal: set up an online shop with minimal fuss
You can have a shop up and running quickly and everything works as expected. Like Wordpress, Shopify has a bunch of off the shelf themes you can install and many of the settings can be tweaked using the Shopify control panel without any coding. Also, most of the out of the box themes used responsive design principles so they sized the store to mobile devices properly.

## Good balance between built-in functionality and flexibility
You get a bunch of functionality out of the box with Shopify, but it also allows you to tweak things to give your client a somewhat customized experience. You can install any JS libraries you want and modify most of the templates used on the site (except for checkout, see below). You can use what Shopify provides or tear it down and write your own code. Just note that you are still boxed into the Shopify experience so you won't be allowed to re-engineer everything. You have to work within the data schema Shopify sets up (products, collections, etc), and are also limited to the types of templates you can create.

## The platform allows developers to create themes, plugins, and re-usable components
Shopify attempts to make their system re-usable by allowing developers to create a re-usable theme and submit to their theme store. They allow developers to abstract out out settings into config files that allows clients to edit the site without coding. For example, you can build a carousel that goes on the homepage and set up a config to allow the store owner to add/delete items to the carousel. Developers can also create add-ins to the stores in the form of plugins. As noted below, Shopify doesn't have a UI for adding new fields, but other developers have created plugins to provide that functionality.

## Support was responsive
We didn't need to use support much, but when we did contact them, they were prompt in their responses.
# Pain Points
## Not set up for multiple developers or a mature development workflow
Shopify seems to be geared towards a developer in their bedroom cranking out a site or theme because there is no support for multiple developers editing code or a dev/staging environment.

Everything is in the cloud and code is edited using Shopify's in-browser editor and file browsing tools. The editor works OK and it's convenient to quickly start editing a store without any set-up but once you start having multiple devs or the need to stage changes, the limitations are obvious.

Since the file is hosted in the cloud and is not under source control, any edits you make are immediately live on the site. Not only is there no source control, but you can't even lock a file, so  you could have 2 devs changing the same file and constantly overwriting each other.</p>

We ended up having to institute some business rules to try and keep devs from stepping on each other's toes, but we still ended up with some cases of overwriting. To stage changes before production, we had to set up a test store and then copy the template changes over to the prod store. All of that was pretty tedious.

If you are a single developer working on site that's not live, then the cloud-based editing may be fine, but once you start scaling up to multiple devs, it gets messy.

## Limited flexibility in modifying the checkout process
The checkout process is locked down by Shopify and the templates to render the pages are not exposed to developers. You can edit a CSS file, but other than that, you are locked into what Shopify provides. I see why Shopify did this because the checkout process is where the mission critical code runs. That's where the customer's orders are taken and credit card is charged, so I imagine it could turn into a support nightmare for Shopify if they allow any template developer to mess up the checkout flow, and then they'll have angry customers blaming their product.

But that being said, keep in mind that you'll have little to no flexibility in changing the checkout flow.

## Fields are limited and there aren't great options for adding new fields
Shopify sets up the schema for products. If you fit your data into Shopify's schema, you're fine, but if you find you need additional fields for products, you have to use Shopify's metafields. There is no native support in the admin tool for metafields, so to edit them you need to install a plugin. There is a free plugin and a pay one. As expected the pay one is more robust allowing you to import metafields from a csv. The problem with both is that you need to access a separate UI to edit metafields. It's pretty tedious to have to open up a totally different UI to edit fields of a product.

## Templates use a proprietary language
All templates in Shopify are written using Shopify's own language called "Liquid". Liquid is not hard to learn and if you're comfortable with any server-side scripting language (ASP, JSP), then Liquid will be easy enough, but it is still another language to learn and figure out what it can do. The language is not terribly difficult, but the docs were not the best. Since Shopify is the only source of Liquid information, you can't really turn to Google to help you out unlike a more widespread language like Javascript or PHP.

## Discounts and shipping rates are more limited compared to other ecommerce platforms
When porting over from other ecommerce platforms we noticed Shopify had a more limited implementation of discounts and shipping rates. Shipping is set up globally and is based on weight. You can't flag specific products for special shipping rates or instructions. For discounts, Shopify offers a variety of pre-canned discount types such as codes, dates, and product collections, but you are boxed into what they offer. For example, you can't offer a discount based on quantity sold; buy 10 get 2 free.

Overall, we would use Shopify again. We had to push back on a fair amount of requests from our client due to the limitations of Shopify, but I felt like it was a good tradeoff. Shopify is selling itself on the speed to get up and running and then it's pretty much hands-off. You have enough access to the guts of the system to push the limits of the shop. But like any templated system, there will be some similarity between shops done in Shopify since you aren't starting with a blank canvas.
