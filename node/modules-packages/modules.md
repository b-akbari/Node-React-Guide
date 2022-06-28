# Modules and Packages
* [what is a module?](/node/modules-packages/modules#whatModule)

- [How to import a module](/node/modules-packages/modules#how-to-import)

- [How to import an object](/node/modules-packages/modules#how-to-import-objects)

- [How to import a function](/node/modules-packages/modules#how-to-import-functions)
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

iv created a simple JS file "exportStringLiteral.js"

    module.exports = 'whats up coders?';

## Lets test it out!
in your terminal, within the modules-packages folder of this repository, enter "node app.js" this will console.log the string literal from our "exportStringLiteral.js" file. 

![running server](../images/exporting-literal.png)

<h2 id='how-to-import-objects'>How to import an object</h2>
i made a seperate script file called 'exportObject.js

    exports.favoriteFruit= 'mango'

    module.exports.favoriteDay='friday'
* Above you see the shorthand and below is the full code of what is happening.

 * The key value pairs are being added on to the exports object.


![running server](../images/exporting-object.png)



<h2 id='how-to-import-functions'>How to import a function</h2>

this is a simple function which just console logs the input

    module.exports.myFunction = function (message){
        console.log('my function:',message)
    };    

*same process as the other imports, we just treat it like a function in the app.js file.*

    //exporting function
    const functionScript= require('./exportFunction')
    functionScript.myFunction('is this thing working?')

now make your own changes and try exporting your own scripts! 