let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/posts').Post;
let multer = require('multer'); //multer allows to read binary-data (this is DATA-type, and not only JSON)
let path = require('path'); //to parse the \ from the image URL 
let uniqid = require('uniqid');

mongoose.connect('mongodb://localhost/travels', {userNewUrlParser: true});
app.use(express.json()); //converts the data from Post01 to JSON format
let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),  //Allows the storage of data-type image in images folder, under the same name
    filename: (req, file, cb) => cb(null, file.originalname)
})
app.use(multer({storage: imageStorage}).single('imageFile')); // imageFile is the name given for the key of the POST:body:data-object

//server request to the DB - Back End
//Get01 - retrieves information from the database about all the posts
app.get('/posts', async (req, resp) => {
    //get all the posts from the DB
    let posts = await Post.find();
    //send the response to Client
    resp.send(posts);
})

//Post01 - Complement for post request made in admin/js/create-post.js 
app.post('/posts', async (req, resp) => {
    let reqBody = req.body;
    let imgPath;
    if(reqBody.imageURL){
        imgPath = reqBody.imageURL;
    }else{
        imgPath = req.file.path.substring(req.file.path.indexOf(path.sep), req.file.path.length);
    }

    let newPost = new Post({
        id: uniqid(),
        title: reqBody.title,
        date: new Date(),
        description: reqBody.description,
        text: reqBody.text,
        country: reqBody.country,
        imageURL: imgPath
    })
 
    await newPost.save();
    resp.send('Created');
})


//Direct addition of data structure to DB
/*
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
*/

app.use(express.static('public'));

app.listen(3000, () => console.log('Bon Voyage!...'))