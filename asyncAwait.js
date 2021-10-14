// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

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

// using async and await to get the required result
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three'});
    getPosts()
}

init();