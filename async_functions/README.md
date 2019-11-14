# Async Functions

## Async Overview

* The async keyword is part of ES2017
* You can declare any function in JavaScript async
* async functions always return promises!
* Inside of an async function, you can write code that looks synchronous, even if it isn't

### Async Rejection

* Inside of async functions, the return value is wrapped in a resolve promise
* If you want to reject instead of resolve, simply throw an error inside of the async function!

### Await Keyword

* Inside of an async function, we can use the await keyword
* await pauses the execution of the async function
* Can await any async operation returnin g a promise (e.g other async functions!)
* The await keyword waits for promise to resolve & extracts its resolved value
* and then after that it resumes the async function's execution

### Handling errors

* If a promise is rejected using await, an error with be thrown.
* We can use a try/catch statement to handle errors!

### Instructions

* In order to understand, You can check all of these files one by one in html file, I mean remove other js files and try with one js file
at a time, in this way it will be better to understand these concepts


