//Add information to the DB by filling a form in the website Admin Page

let createForm = document.querySelector('.create-post-form');
let createTitle = document.querySelector('#create-title');
let createCountry = document.querySelector('#create-country');
let createImageUrl = document.querySelector('#create-image-url');
let createText = document.querySelector('#create-text');

createForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let text = createText.value;
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            title: createTitle.value,
            country: createCountry.value,
            imageUrl: createImageUrl.value,
            text: text,
            description: text.substring(0, text.indexOf('.') + 1)
        })
    }).then((response) => response.text()).then((data) => window.history.go()); //window.history.go auto-refresh admin page when new content is added.
})