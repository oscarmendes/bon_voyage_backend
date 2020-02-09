let mongoose = require('mongoose');
let Schema = mongoose.Schema; //mongoose facilitates the creation of objects for MogoDB database

let postSchema = new Schema({
    id: Number, 
    title: String,
    date: Date,
    description: String,
    text: String,
    country: String,
    imageURL: String
});

//Post is a class not a variable
let Post = mongoose.model('Post', postSchema);

module.exports = {Post: Post}