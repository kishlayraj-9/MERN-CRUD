const Post = require('../models/post');
const slugify = require('slugify');


exports.create = (req,res)=>{
    //console.log(req.body);
    const {title, content, user} = req.body
    const slug = slugify(title)

    
    
    //validate
    switch(true){
        case !title:
            return res.status(400).json({error: 'Title is required'});
            break;
        case !content:
            return res.status(400).json({error: 'Content is required'});
            break;
    }

    //res.json({title, content, user})

    

    //create post
    /*
    Post.create({title,content,user,slug}, (err, post) =>{
        if(err){
            console.log(err);
            res.status(400).json({error: 'Duplicate post. try another title'});
        }
        res.json(post);
    });
    */

    Post.create({title,content,user,slug})
    .then ((post) => {
        res.json(post);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json({error: 'Duplicate post. try another title'});
    });

};

exports.list = (req,res) => {
    Post.find({})
    .limit(10)
    .sort({_id: -1})
    .exec()
    .then((posts) => {
        res.json(posts)
    })
    .catch((err) =>{
        console.log(err)
    })
    /*
    Post.find({}).exec((err,posts) => {
        if(err) console.log(err)
            res.json(posts)
    })*/
}

exports.read = (req, res) => {
    
    const {slug} = req.params;
    //console.log(req.params.slug);
    Post.findOne({slug: slug})
    .exec()
    .then((post) => {
        res.json(post)
    })
    .catch((err) =>{ 
        console.log(err)
    })
}  

exports.update = (req,res) => {
    const {slug} = req.params;
    const {title, content, user} = req.body
    Post.findOneAndUpdate({slug:slug}, {title, content, user}, {new:true})
    .exec() 
    .then(post => res.json(post))
    .catch(err=> console.log(err));
}

exports.remove = (req, res) => {  
    const {slug} = req.params;
    
    Post.findOneAndDelete({slug: slug})
    .exec()
    .then((post) => {
        res.send({message: "Post Deleted"})
    })
    .catch((err) =>{ 
        console.log(err)
    })
}  