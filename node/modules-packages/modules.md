# Modules and Packages
* [what is a module?](/node/modules-packages/modules#whatModule)

- [How to import a module](/node/modules-packages/modules#how-to-import)

---

<h2 id='whatModule'> what are packages?</h2>

a package contains multiple modules (blocks of code) that we can import into our Node.JS project. 

We can make our own blocks of code and import them from other files or use the many packages which are ready to be used.

***NPM*** (node package manager) is  a piece of software which manages packages and lets you download them with ease.

These packages have a JSON file usually with the name, version number license etc of the package.

---
<h2 id='how-to-import'>How to import a module</h2>

A copy of these modules can be imported using the ***require*** function which we used to import the HTTP package in the previous section:

    const http = require('http');

You can create your own modules and increase the complexity much more later on, but for now i will give a simple example.

iv created a simple JS file "myScript.js"

    module.exports = 'whats up coders?';

## Lets test it out!
in your terminal, within the modules-packages folder of this repository, enter "node app.js" this will console.log the string literal from our "myScript.js" file. 

![running server](../images/exporting-literal.png)

## how about objects?

    exports.favoriteFruit= 'mango'

    module.exports.favoriteDay='friday'
* Above you see the shorthand and below is the full code of what is happening.

 * The key value pairs are being added on to the exports object.

uncomment lines 6-8 and try running the node again!

![running server](../images/exporting-object.png)
