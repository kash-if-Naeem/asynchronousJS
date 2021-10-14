// Promises
// Promises are objects that represent the eventual outcome of an asynchronous operation.

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
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
    
}

// This function is used to push additional objects to the posts
function createPost(post) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error! Something went wrong');
            }
        }, 2000)
    })
    
}

// calling the functions to get the required result using callbacks
// using .then to handle success and .catch to handle failure
createPost({ title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(err => console.log(err));

// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))

