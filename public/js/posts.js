
//FRONT END - requires DB implementation
//Requests the information to create the posts - in app.js, line:[app.get('/posts', ...)]
async function getPosts(){
    return await fetch('http://localhost:3000/posts')
                .then((response) => response.json())
                .then((data) => data);
}
