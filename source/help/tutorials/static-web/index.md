---
title: Static Web Design
date: 2017-03-01 16:15:35
type: tutorial
keywords:
  - help
  - tutorials
  - web
---

{% reveal https://redbrick.github.io/admin-training/static-webdesign/ 800 600 %}

# Static Site

## Why
There are many [Problem with cms](http://blog.theinternets.be/the-problem-with-modern-content-management-systems/) some due to security others dues to infrastructure dependency, database or running a server
Allows us to separate layout from content.  
Produces HTML which is easy to host ans share.  

## Dynamic vs static
### Static Site
A static site is one that does not change once the content is set.  
- plain old html site
- redbrick

### Dynamic Site
A dynamic is one that is generated everytime you load it.  
- wordpress
- facebook
- twitter

# Hugo
Written in go, so runs on anything  
Uses markdown and yaml to store setting and contents

## Using Hugo
Hugo is already installed on pygmalion, so everyone just needs to ssh there to use it
```
ssh username@pygmalion.redbrick.dcu.ie
```

## Creating your first site
To generate your first site you can type the command:

```
$ hugo new site ~/my-website
```
Jump into your new site and have a look around at the files
```
$ cd ~/my-website
$ ls -F
```
Open up the `config.yaml` file to change the configuration of your website

```
$ nano config.yaml
```
Edit the content/index.md with what ever you want to say
```
$ nano content/index.md
```

## Making it your own
### Changing images
To get started you will want to add your own picutres for your avatar, banner and about photos. To change these you will need to add these to your `/static/img/` folder.
- avatar.jpg
- banner.jpg
- about.jpg

### Customising pages
* Change the baseURL `baseURL: "http://www.redbrick.dcu.ie/~username/"` to inclue your username
* Change `title: A Redbrick users site` to the title of your main page 
* You can also add your social media links in here after `link: '#'`

### Adding new pages
```
$ hugo new about.md
```
* This will generate a new page with some metadata all ready in it
Take a look at this new file with
```
$ nano content/about.md
```

## Building the Site
To build your site we type the command
```
$ hugo
```
This will output all the code into the `public` folder.  
*Note:* Hugo can be weird if you don't delete your public before you generate everytime  
*Warning*: rm -rf is sometimes dangerous. Don't run in sudo unless you know what you are doing

```
$ rm -rf public
```
This will _perminantly_ delete the public folder  
You can also achieve the same thing by running  
```
$ hugo --cleanDestinationDir
```
## Looking at the site locally

If you wanna look at your site before you go and deplot it (recomended)

```
$ hugo server
```

This will generate a site on localhost:1313

## Why is my static site really slow to load?
### Images
Don't use high-res  
scale them down and compress them
- thumbnails 200px
- banners 800px

(These are rough estimates every page is different)
Compression removes details but makes them smaller

### Minification
Minification removes white spaces reducing the size of the file allowing you to load your site faster.
You can minify html, css, or js.  
Tools for minification:
 - Gulp
 - Grunt
 - Webpack

## Blog
hugo can be used for a blog.
Youll need a theme that supports blog posts.
Just run `hugo new post/my-post-name.md`
