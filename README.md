# asynchronousJS using callbacks, promises and async/await

//Explanation:
This is an overview for asynchronous JS using different techniques i.e. callbacks, promises and async/await.
The 3 .js files contain 2 functions and an array of object
each .js file contains the same variable and functions but the syntax for using callbacks, promises and async/await is different.
The main reason for this repo is to show the syntax difference between the asynch methods.


//variables and functions in .js files
The variable names "posts" is an array of objets that contains 2 properties i.e. title and body.
The function "getPosts" is used to iterate through "posts" and get each index and its property. setTimeOut is used to add delay.
The function "createPost" is used to push data to the array of object "posts". It also contains setTimeOut just to show the operation of asynch. JS.

//index.html
The index.html file is just for running the js files on browser.
The three script tags are for running different .js scripts 

//callbacks.js
to use this a second argument named 'callback' is added to "createPosts" function.
Also, callback function is called within the setTimeOut function
To call both functions asynchronously, add the first function "getPosts" by appending it as second argument in the calling of "createPost"

//promises.js
A promise is added in createPost() with an execution function having 2 parameteres as functions i.e. resolve and reject. 
Either resolve and reject are called on success and failure respectively.
To call the function createPost(), .then and .catch are used.
.then is used to handle success and .catch to handle failure.

//asyncAwait.js
The createPost() is same as in promises.js
'async' keyword is used to show an asynch. function and also to return a promise.
'await' keyword is used to wait for the assigned function to execute first and then it will move to next line

*********************The end********************
