let addPostBtn = document.querySelector('.create-post-btn');
//This code displays the posts in the admin page, everytime such page is requested
document.addEventListener('DOMContentLoaded', async function(){
    let posts = await getPosts(); //from public/js/posts.js
    
    let articles = document.querySelector('.articles'); //select the div-tag containing the post artciles in admin/index.html
    articles.innerHTML  = ''; //Clear out the div-tag for the posts
    
    posts.forEach((post) => {
        //for every 'post' and article-tag needs to be created
        let postHTML = `
        <article class="d-flex justify-content-between align-items-center article-inline">
            <div class="id w5">${post.id}</div>
            <div class="name w30">${post.title}</div>
            <div class="date w30">${post.date}</div>
            <div class="country w20">${post.country}</div>
            <div class="edit w10"><button class="btn btn-link">Edit</button></div>
            <div class="remove w5"><button class="btn btn-link">X</button></div>
        </article>`;
        articles.insertAdjacentHTML('beforeend', postHTML);
    });
})

addPostBtn.addEventListener('click', function(){
    let articlesTab = document.getElementById('v-pills-articles');
    articlesTab.classList.remove('show');
    articlesTab.classList.remove('active');

    let createTab = document.getElementById('v-pills-create-post');
    createTab.classList.add('show');
    createTab.classList.add('active');
})