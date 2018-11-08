# Design Drug

## App Structure

1. The HTML file is in the root `/`
2. CSS files are in `/css` The built version of the css files is in `/dist`
3. The JS files (external libraries only) are in `/js`
4. The Image files are in `/img/<page_name>`

## Special Frameworks/Tools Used

1. [SASS](http://sass-lang.com/)

All CSS is written in SASS files (`.scss). When you modify these, you need to have `gulp watch` running for new build files to be created in `dist/`. Do NOT make changes in `dist/*.css` files

Each HTML template has its own CSS file. This is great to load only the CSS needed on that route. Popular frameworks support scoped CSS files so there shouldn't be a problem using these. Using a single big CSS file is not recommended for performance reasons.

The entry point for each template's CSS file is `<page_name>.scss`. It then loads the global CSS rules mentioned in `partials/_global.scss` and any components needed on that template.

There are also a few partials
1. Header (`partials/_header.scss`)- all rules related to the header must exist only in this file
2. Footer (`partials/_footer.scss`) - all rules related to the footer must exist only here

These partials are imported in `partials/_global.scss` so there is no need to import them separately

2. [BEM](http://getbem.com/)

All CSS classes are writen using Block-Enlement-Modifier methodology or BEM for short. This is great for two reasons:
- Enforcing a component like structure to CSS classes
- Keeping CSS specificity to a minimum.

With BEM, it's really easy to understand what each part of the layout does.

For example:
`.loginWrapper` is the enclosing block for the login wrapper
`.loginWrapper__form` is an element of the login wrapper which contains the form

Reading the HTML files from top to bottom should be enough to get a grasp of which blocks are used.

For all future development, please follow the same methodology.

3. [Gulp](https://gulpjs.com/)

Gulp is used to automate certain processes in this project

- Building SASS Files into CSS (`gulp sass` or `gulp sass:watch`)

All the tasks can be found in `gulpfile.js`

4. Images
All images are optimized using ImageOptim for mac which internally uses PNGCrush, JPEGOptim, SVGO and other optimization algorithms to keep image size low. In case you wish to use a different image, kindly ensure that it is optimized through a tool like ImageOptim

## Build Steps

1. Install NPM
2. Run this commands on your terminal `npm i`
3. After all the dependencies are installed, run `live-server --ignore='node_modules,**/node_modules/**'` to setup a live-server
4. In another terminal tab, run `gulp watch` to begin watching SASS files for changes