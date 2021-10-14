// Asynchronous JS
// Functions running in parallel with other functions are called asynchronous

// CALLBACKS
// "I will call back later!"
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// Posts is an array of objects
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post Two'}
];

// this function iterates through posts i.e. array of object using foreach
// setTimeOut is used to add delay. It takes 2 arguments i.e. callback function and time in milliseconds
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

// This function is used to push additional objects to the posts
// callback fn is an old way for asynchronous operations
function createPost(post, callback) { 
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

// calling the functions to get the required result using callbacks
//  the output will be post 1, post 2, post 3 in a list form
createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);