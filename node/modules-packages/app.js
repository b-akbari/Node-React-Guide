
//exporting string literal
const simpleScript= require('./exportStringLiteral')

console.log('simple Script:', simpleScript)

//exporting object
const objectScript=require('./exportObject')

console.log('object Script:', objectScript)

//exporting function
const functionScript= require('./exportFunction')
functionScript.myFunction('is this thing working?')
