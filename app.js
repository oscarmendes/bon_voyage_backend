let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/posts').Post;

mongoose.connect('mongodb://localhost/travels');

let post1 = new Post({
    id: 1, 
    title: 'Eiffel Tower',
    date: new Date(),
    description: 'Some description',
    text: 'Some text',
    country: 'France',
    imageURL: '/images/img-1.jpg'
})

post1.save();

app.use(express.static('public'));

app.listen(3000, () => console.log('Bon Voyage!...'))