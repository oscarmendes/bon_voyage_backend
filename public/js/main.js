//This code displays the posts in the admin page, everytime such page is requested
document.addEventListener('DOMContentLoaded', async function(){
    let posts = await getPosts(); //from public/js/posts.js
    
    let articles = document.querySelector('.articles'); //select the div-tag containing the post artciles in admin/index.html
    articles.innerHTML  = ''; //Clear out the div-tag for the posts
    
    posts.forEach((post) => {
        //for every 'post' and article-tag needs to be created
        let postHTML = `
        <div class="col-4">
            <div class="card">
                <img class="card-img-top" src="${post.imageURL}" alt="${post.title}"> 
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.description}</p>
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>`;
        articles.insertAdjacentHTML('beforeend', postHTML);
    });
})