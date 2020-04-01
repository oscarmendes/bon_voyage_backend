//Add information to the DB by filling a form in the website Admin Page

let createForm = document.querySelector('.create-post-form');
let createTitle = document.querySelector('#create-title');
let createCountry = document.querySelector('#create-country');
let createImageUrl = document.querySelector('#create-image-url');
let createText = document.querySelector('#create-text');

createForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let text = createText.value;
    let data = new FormData();
    data.append('title', createTitle.value);
    data.append('country', createCountry.value);
    data.append('imageUrl', createImageUrl.value);
    data.append('text', text);
    data.append('description', text.substring(0, text.indexOf('.') + 1));

    fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go()); //window.history.go auto-refresh admin page when new content is added.
})